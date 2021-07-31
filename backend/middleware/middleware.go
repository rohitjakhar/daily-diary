package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"go-server/models"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	// "github.com/clerkinc/clerk-sdk-go/clerk"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var collection *mongo.Collection

func init() {
	loadEnv()
	createDBInstance()
}

func loadEnv() {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}
}

func createDBInstance() {
	connectionString := os.Getenv("DB_URI")
	
	// Database Name
	dbName := os.Getenv("DB_NAME")

	// Collection name
	collName := os.Getenv("DB_COLLECTION_NAME")
	
	// Set client options
	clientOptions := options.Client().ApplyURI(connectionString)

	// connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collection = client.Database(dbName).Collection(collName)

	fmt.Println("Collection instance created!")

}

func GetAllDairy(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	param := mux.Vars(r)
	payload := getAllDairy(param["id"])
	json.NewEncoder(w).Encode(payload)
}

func CreateDairy(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var task models.Dairy 
	_ = json.NewDecoder(r.Body).Decode(&task)
	insertOneTask(task)
	json.NewEncoder(w).Encode(task)
}

// func UpdateDairy(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
// 	w.Header().Set("Access-Control-Allow-Origin", "*")
// 	w.Header().Set("Access-Control-Allow-Methods", "PUT")
// 	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

// 	params := mux.Vars(r)
// 	updateDairy(params["id"])
// 	json.NewEncoder(w).Encode(params["id"])
// }

func DeleteOneDairy(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	params := mux.Vars(r)
	deleteOneTask(params["id"])
	json.NewEncoder(w).Encode(params["id"])
}

func DeleteAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	param := mux.Vars(r)
	deleteAllTask(param["id"])
	json.NewEncoder(w).Encode(param["id"])
	fmt.Println("Deleted ")
}

func getAllDairy(id string) []primitive.M {
	fmt.Println(id)
	cur, err := collection.Find(context.Background(), bson.M {"userid": id})
	if err != nil {
		log.Fatal(err)
	}

	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(err)
		}

		results = append(results, result)
	}
	
	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())
	return results
}

func insertOneTask(task models.Dairy) {
	insertResult, err := collection.InsertOne(context.Background(), task)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single Record", insertResult.InsertedID)
}

func deleteOneTask(task string){
	fmt.Println(task)
	id, _ := primitive.ObjectIDFromHex(task)
	filter := bson.M{"_id": id}
	d, err := collection.DeleteOne(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Deleted Document", d.DeletedCount)
}

func deleteAllTask(userid string){
	fmt.Println(userid)
	filter := bson.M{"userid": userid}
	d, err := collection.DeleteMany(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Deleted Document", d.DeletedCount)
}

// func updateDairy(id string) {
// 	d, err := collection.UpdateByID(context.Background(), bson.M{"_id": id})
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	fmt.Println("Updated", d.UpsertedID)
// }
// func getAllUser() []primitive.M {
// 	apiKey := os.Getenv("API_KEY")

// 	client, err := clerk.NewClient(apiKey)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	users, err := client.Users().ListAll()
// 	return users
// }