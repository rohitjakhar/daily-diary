package main

import (
	"fmt"
	"log"
	"net/http"
	
	"go-server/route"
)

func main() {
	
	r := route.MyRoute()
	// fs := http.FileServer(http.Dir("build"))
	// http.Handle("/", fs)
	fmt.Println("Starting server on the port 8081...")

	log.Fatal(http.ListenAndServe(":8081", r))
}