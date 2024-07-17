import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState, useCallback } from "react";

const WEBSOCKET_URL = "ws://localhost:8080/ws";

export default function Home() {
  const [ports, setPorts] = useState<number[]>([]);
  const [ip, setIp] = useState<string>("");
  const [ws, setWs] = useState<WebSocket | null>(null);

  const handleScan = useCallback(() => {
    ws?.send(JSON.stringify({ type: "ip", content: ip }));
  }, [ws, ip]);

  const handleCancel = useCallback(() => {
    ws?.send(JSON.stringify({ type: "cancel" }));
  }, [ws]);

  useEffect(() => {
    const wsIns = new WebSocket(WEBSOCKET_URL);

    wsIns.onopen = () => {
      console.log("connected");
      setWs(wsIns);
    };

    wsIns.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      if (data.type === "port") {
        setPorts((prev) => [...prev, data.content]);
      } else {
        console.log(data);
      }
    };

    wsIns.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    wsIns.onclose = () => {
      console.log("disconnected");
      setWs(null);
    };

    return () => {
      wsIns.close();
    };
  }, []);

  return (
    <div>
      <h1>NMap web</h1>
      <Label htmlFor="ip">IP</Label>
      <Input
        id="ip"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        placeholder="IP Address"
      />
      <Button onClick={handleScan}>Scan</Button>
      <Button onClick={handleCancel}>Cancel</Button>
      <div className="flex items-center gap-2">
        {ports.map((port) => (
          <div key={port}>{port}</div>
        ))}
      </div>
    </div>
  );
}
