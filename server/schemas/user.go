package schemas

import (
	"database/sql"
	"errors"
)

// User is one user of our service.
type User struct {
	ID        int    `json:"_id"`
	Name      string `json:"name"`
	Username  string `json:"username"`
	AuthToken string `json:"token,omitempty"`
}

func (u *User) getUser(db *sql.DB) (User, error) {
	return User{}, errors.New("not implemented")
}
