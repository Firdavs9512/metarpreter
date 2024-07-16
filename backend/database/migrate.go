package database

import "github.com/firdavs9512/metarpreter/backend/models"

func Migrate() error {
	return DB.AutoMigrate(&models.User{}, &models.AuthToken{})
}
