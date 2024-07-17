package cmd

import (
	"io/fs"
	"log"
	"net/http"
	"strings"

	"github.com/firdavs9512/metarpreter/backend/controllers"
	"github.com/firdavs9512/metarpreter/backend/database"
	middlewareAuth "github.com/firdavs9512/metarpreter/backend/middleware"
	"github.com/firdavs9512/metarpreter/frontend"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func Run() {
	assets, _ := frontend.Assets()

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Init database
	database.ConnectDB()
	database.Migrate()

	// Serve static files
	e.GET("/*", SPA(assets))

	// Api routes
	api := e.Group("/api")
	auth := api.Group("/auth")

	auth.POST("/register", (&controllers.AuthController{}).Register)
	auth.POST("/login", (&controllers.AuthController{}).Login)
	auth.Any("/logout", (&controllers.AuthController{}).Logout)

	// Dashboard
	dashboard := api.Group("/dashboard")
	authCheck := middlewareAuth.NewAuthCheck()
	dashboard.Use(authCheck.Check)
	dashboard.GET("/ping", (&controllers.UserPingController{}).Ping)

	log.Println("Listening on port 8080")
	e.Logger.Fatal(e.Start(":8080"))
}

func SPA(assets fs.FS) echo.HandlerFunc {
	return func(c echo.Context) error {
		url := c.Request().URL.Path
		if !strings.Contains(url, ".") {
			c.Request().URL.Path = "/"
		}
		http.FileServer(http.FS(assets)).ServeHTTP(c.Response().Writer, c.Request())
		return nil
	}
}
