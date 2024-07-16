package middleware

import (
	"github.com/firdavs9512/metarpreter/backend/database"
	"github.com/firdavs9512/metarpreter/backend/models"
	"github.com/labstack/echo/v4"
)

type AuthCheck struct{}

func NewAuthCheck() *AuthCheck {
	return &AuthCheck{}
}

// Check if user is authenticated
func (a *AuthCheck) Check(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		// check if token is valid
		token := c.Request().Header.Get("Authorization")
		if token == "" {
			return c.JSON(401, map[string]string{"error": "Unauthorized"})
		}

		// check if token exists
		var authToken models.AuthToken
		database.DB.Where("token = ?", token).First(&authToken)
		if authToken.ID == 0 {
			return c.JSON(401, map[string]string{"error": "Unauthorized"})
		}

		// get user and set it to context
		var user models.User
		database.DB.Where("id = ?", authToken.UserID).First(&user)
		user.Password = ""
		c.Set("user", user)

		return next(c)
	}
}
