package database

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() error {
	var err error
	DB, err = gorm.Open(sqlite.Open("metarpreter.db"), &gorm.Config{})
	if err != nil {
		return err
	}

	return nil
}
