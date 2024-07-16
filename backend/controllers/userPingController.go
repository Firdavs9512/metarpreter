package controllers

import (
	"time"

	"github.com/firdavs9512/metarpreter/backend/models"
	"github.com/labstack/echo/v4"
)

type UserPingController struct{}

func (u *UserPingController) Ping(c echo.Context) error {
	// TODO: fake slow response
	time.Sleep(3 * time.Second)

	user := c.Get("user").(models.User)
	return c.JSON(200, map[string]interface{}{
		"message": "pong",
		"user":    user,
	})
}
