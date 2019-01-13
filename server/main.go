package main

import (
	"os"

	"github.com/TylerLafayette/Proxim/server/api"
)

func main() {
	a := api.App{}

	a.Initialize(
		os.Getenv("PROXIM_DB_USERNAME"),
		os.Getenv("PROXIM_DB_PASSWORD"),
		os.Getenv("PROXIM_DB_DBNAME"),
	)

	a.Run(":8080")
}
