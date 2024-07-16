package cmd

import (
	"net/http"

	"github.com/firdavs9512/metarpreter/backend/controllers"
	"github.com/firdavs9512/metarpreter/backend/database"
	"github.com/firdavs9512/metarpreter/backend/middleware"
	"github.com/firdavs9512/metarpreter/frontend"
	"github.com/labstack/echo/v4"
)

func Run() {
	e := echo.New()

	// Init database
	database.ConnectDB()
	database.Migrate()

	frontend.RegisterHandlers(e)

	// API routes
	api := e.Group("/api")
	auth := api.Group("/auth")

	auth.POST("/login", (&controllers.AuthController{}).Login)
	auth.POST("/register", (&controllers.AuthController{}).Register)
	auth.Any("/logout", (&controllers.AuthController{}).Logout)

	// Dashboard routes
	dashboard := api.Group("/dashboard")

	// Auth middleware
	authCheck := middleware.NewAuthCheck()
	dashboard.Use(authCheck.Check)
	dashboard.GET("/ping", (&controllers.UserPingController{}).Ping)

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
