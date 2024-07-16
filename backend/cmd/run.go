package cmd

import (
	"net/http"

	"github.com/firdavs9512/metarpreter/frontend"
	"github.com/labstack/echo/v4"
)

func Run() {
	e := echo.New()

	frontend.RegisterHandlers(e)

	// API routes
	api := e.Group("/api")
	api.GET("", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{"ping": "pong"})
	})

	api.GET("/hello", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{"hello": "world"})
	})

	e.HTTPErrorHandler = func(err error, c echo.Context) {
		// Check if error is NotFound return index.html else return error
		if he, ok := err.(*echo.HTTPError); ok {
			if he.Code == http.StatusNotFound {
				c.File("frontend/dist/index.html")
				return
			}
		}
		e.DefaultHTTPErrorHandler(err, c)
	}

	e.Logger.Fatal(e.Start(":8080"))
}
