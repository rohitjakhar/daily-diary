package route

import (
	"go-server/middleware"

	"github.com/gorilla/mux"
)

func MyRoute() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api/allDairy/{id}", middleware.GetAllDairy).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/addDairy", middleware.CreateDairy).Methods("POST", "OPTIONS")
	return router
	
}