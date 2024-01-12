// 1. Import MongoDB Client
import { MongoClient } from 'mongodb';

const url = "mongodb://127.0.0.1:27017";
let client;
// 2. Function to connect to the database
export const connectToMongoDB = () => {
    MongoClient.connect(url)
        .then((clientInstance) =>{
            client = clientInstance;
            console.log("Connected to mongoDb");
        })
        .catch((err) => {
            console.error('Error connecting to mongodb', err);
        });
};

// 3. Function to access the database
export const getDB = () => {
    return client.db("confession");
};
