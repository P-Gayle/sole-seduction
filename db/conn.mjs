import { MongoClient } from "mongodb";

const connectionString = process.env.DB_URI;

const client = new MongoClient(connectionString);

let conn;
let db;

try {
    (async () => {
        conn = await client.connect();
        db = conn.db("sole_seduction");
    })()
}
catch (e) {
    console.error("Error connecting to database:", e);
}

export default db;