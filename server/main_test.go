package main

import (
	"log"
	"os"
	"testing"

	"github.com/TylerLafayette/Proxim/server/api"
)

const tableCreationQuery = `CREATE TABLE IF NOT EXISTS users
(
id SERIAL,
name TEXT NOT NULL,
username TEXT,
token TEXT,
CONSTRAINT users_pkey PRIMARY KEY (id)
)`

var a api.App

func TestMain(m *testing.M) {
	a = api.App{}
	a.Initialize(
		os.Getenv("PROXIM_DB_USERNAME"),
		os.Getenv("PROXIM_DB_PASSWORD"),
		os.Getenv("PROXIM_DB_DBNAME"),
	)

	ensureTableExists()

	code := m.Run()

	clearTable()

	os.Exit(code)
}

func ensureTableExists() {
	if _, err := a.DB.Exec(tableCreationQuery); err != nil {
		log.Fatal(err)
	}
}

func clearTable() {
	a.DB.Exec("DELETE FROM users")
	a.DB.Exec("ALTER SEQUENCE users_id_seq RESTART WITH 1")
}
