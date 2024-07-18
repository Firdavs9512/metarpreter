package websocket

import (
	"context"
	"encoding/json"
	"fmt"
	"net"
	"net/http"
	"sync"
	"time"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
)

type client struct {
	conn      *websocket.Conn
	isClosing bool
	mu        sync.Mutex
	cancel    context.CancelFunc
}

var clients = make(map[*websocket.Conn]*client)
var register = make(chan *websocket.Conn)
var unregister = make(chan *websocket.Conn)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type Message struct {
	Type    string `json:"type"`
	Content string `json:"content"`
}

func RunHub() {
	for {
		select {
		case connection := <-register:
			clients[connection] = &client{conn: connection}
			fmt.Println("connection registered")

		case connection := <-unregister:
			if clients[connection].cancel != nil {
				clients[connection].cancel()
			}
			delete(clients, connection)
			fmt.Println("connection unregistered")
		}
	}
}

func HandleWebSocket(c echo.Context) error {
	conn, err := upgrader.Upgrade(c.Response(), c.Request(), nil)
	if err != nil {
		return err
	}

	defer func() {
		unregister <- conn
		conn.Close()
	}()

	register <- conn

	for {
		messageType, message, err := conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				fmt.Println("read error:", err)
			}
			return nil
		}

		if messageType == websocket.TextMessage {
			var msg Message
			if err := json.Unmarshal(message, &msg); err != nil {
				fmt.Println("unmarshal error:", err)
				continue
			}

			switch msg.Type {
			case "ip":
				ctx, cancel := context.WithCancel(context.Background())
				client := clients[conn]
				client.cancel = cancel
				go scanPorts(ctx, msg.Content, conn)
			case "cancel":
				client := clients[conn]
				if client.cancel != nil {
					client.cancel()
				}
			default:
				fmt.Println("Unknown message type:", msg.Type)
			}
		} else {
			fmt.Println("websocket message received of type", messageType)
		}
	}
}

func scanPorts(ctx context.Context, ip string, wsConn *websocket.Conn) {
	for port := 1; port <= 65535; port++ {
		select {
		case <-ctx.Done():
			sendMessage(wsConn, Message{Type: "cancel", Content: "Scan canceled"})
			return
		default:
			address := fmt.Sprintf("%s:%d", ip, port)
			conn, err := net.DialTimeout("tcp", address, 1*time.Second)
			if err != nil {
				continue
			}
			conn.Close()
			message := Message{Type: "port", Content: fmt.Sprintf("%d", port)}
			sendMessage(wsConn, message)
		}
	}

	// Send a message to the client to indicate that the scan is complete
	sendMessage(wsConn, Message{Type: "done", Content: "Scan complete"})
}

func sendMessage(conn *websocket.Conn, msg Message) {
	client := clients[conn]
	client.mu.Lock()
	defer client.mu.Unlock()
	if client.isClosing {
		return
	}
	data, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("marshal error:", err)
		return
	}
	if err := conn.WriteMessage(websocket.TextMessage, data); err != nil {
		client.isClosing = true
		fmt.Println("write error:", err)
		conn.WriteMessage(websocket.CloseMessage, []byte{})
		conn.Close()
		unregister <- conn
	}
}
