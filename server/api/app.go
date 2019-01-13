package api

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/lib/pq"

	"github.com/gorilla/mux"
)

// App is our main webapp.
type App struct {
	Router    *mux.Router
	APIRouter *mux.Router
	DB        *sql.DB
}

// Initialize initializes our app.
func (a *App) Initialize(username, password, db string) {
	connectionString :=
		fmt.Sprintf("user=%s dbname=%s", username, db)

	var err error
	a.DB, err = sql.Open("postgres", connectionString)
	if err != nil {
		log.Fatal(err)
	}

	a.Router = mux.NewRouter()
	a.APIRouter = a.Router.PathPrefix("/api/v1/").Subrouter()
}

// initializeRoutes creates all of our API's routes
func (a *App) initializeRoutes() {

}

// Run runs our app on a specificed address.
func (a *App) Run(addr string) {
	log.Fatal(http.ListenAndServe(addr, a.Router))
}
