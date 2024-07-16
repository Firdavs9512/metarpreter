package models

import (
	"gorm.io/gorm"
)

type AuthToken struct {
	gorm.Model
	Token  string `json:"token"`
	UserID uint   `json:"user_id"`
}
