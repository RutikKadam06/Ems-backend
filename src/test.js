import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config({
  path: "../.env",
});

const client = new MongoClient(process.env.MONGO_URI);

try {
  await client.connect();
  console.log("Connected");
} catch (e) {
  console.error(e);
}