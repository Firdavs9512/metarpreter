package controllers

import (
	"math/rand"
	"net/http"
	"regexp"

	"github.com/firdavs9512/metarpreter/backend/database"
	"github.com/firdavs9512/metarpreter/backend/models"
	"github.com/firdavs9512/metarpreter/backend/utils"
	"github.com/labstack/echo/v4"
)

type AuthController struct {
}

type RegisterRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (a *AuthController) Login(c echo.Context) error {
	var req RegisterRequest
	if err := c.Bind(&req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": err.Error(),
		})
	}

	// validate request
	if req.Email == "" || req.Password == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": "email and password are required",
		})
	}

	// validate email
	if !isEmailValid(req.Email) {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": "invalid email",
		})
	}

	// check if email exists
	var user models.User
	database.DB.Where("email = ?", req.Email).First(&user)
	if user.ID == 0 {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": "User not found or invalid password",
		})
	}

	// verify password
	if !utils.VerifyPassword(req.Password, user.Password) {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": "User not found or invalid password",
		})
	}

	// delete old auth tokens
	database.DB.Where("user_id = ?", user.ID).Delete(&models.AuthToken{})

	// create auth token
	authToken := models.AuthToken{
		Token:  tokenGenerator(64),
		UserID: user.ID,
	}

	database.DB.Create(&authToken)

	return c.JSON(http.StatusOK, map[string]string{"token": authToken.Token})
}

func (a *AuthController) Logout(c echo.Context) error {
	// get token from header
	token := c.Request().Header.Get("Authorization")
	if token == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "false",
			"message": "Successful logout",
		})
	}

	// delete token
	database.DB.Where("token = ?", token).Delete(&models.AuthToken{})
	return c.JSON(http.StatusOK, map[string]string{
		"error":   "false",
		"message": "Successful logout",
	})
}

func (a *AuthController) Register(c echo.Context) error {
	var req RegisterRequest
	if err := c.Bind(&req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	}

	// validate request
	if req.Email == "" || req.Password == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": "email and password are required",
		})
	}

	// validate email
	if !isEmailValid(req.Email) {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": "invalid email",
		})
	}

	// check if email already exists
	var oldUser models.User
	database.DB.Where("email = ?", req.Email).First(&oldUser)
	if oldUser.ID != 0 {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error":   "true",
			"message": "email already exists",
		})
	}

	password, err := utils.HashPassword(req.Password)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error":   "true",
			"message": "internal server error",
		})
	}

	// create user
	user := models.User{
		Email:    req.Email,
		Password: password,
	}

	database.DB.Create(&user)

	// create auth token
	authToken := models.AuthToken{
		Token:  tokenGenerator(64),
		UserID: user.ID,
	}

	database.DB.Create(&authToken)

	return c.JSON(http.StatusOK, map[string]string{"token": authToken.Token})
}

func isEmailValid(e string) bool {
	emailRegex := regexp.MustCompile(`^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$`)
	return emailRegex.MatchString(e)
}

var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

func tokenGenerator(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	return string(b)
}
