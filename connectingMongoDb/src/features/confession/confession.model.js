import { getDB } from "../../config/mongodb.js";

export default class ConfessionModel {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
  }

  static async create(title, body, author) {
    try {
      if (!title || !body || !author) {
        throw new Error("Title, body, and author are required.");
      }
      // 1. Get the database
      const db = getDB();
      // 2. Get the collection
      const collection = db.collection("confessions")
      // 3. Insert the document
      const newRecord = new ConfessionModel(
        title,
        body,
        author
      )
      await collection.insertOne(newRecord);
      return newRecord;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
