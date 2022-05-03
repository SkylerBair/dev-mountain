package main

import (
	"net/http"
)

//open file and then get file bytes wtrite to buffer.
//serve root directory

func main() {
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)
	// http.Handle("/app", http.FileServer(http.Dir("./app")))
	http.ListenAndServe(":4000", nil)
}
