import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      await collection.insertOne(expense);
      return expense;
    }
    catch (err) {
      throw new Error("Something went wrong")
    }
  }

  // Get one expnese by its ID
  async getOne(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      return await collection.findOne({ _id: new ObjectId(id) });
    }
    catch (err) {
      throw new Error("Something went wrong")
    }
  }

  // Get all expenses
  async getAllExpenses() {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      return await collection.find().toArray();
    }
    catch (err) {
      throw new Error("Something went wrong")
    }
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      await collection.updateOne(
          {_id:new ObjectId(id)}, 
          // $set: { tags: [] }, // Set 'tags' to an empty array if it's null
          {
            $push: { tags: tag } 
          }
      );
    }
    catch (err) {
      console.error("Error in addTagToExpense:", err);
      throw new Error("Something went wrong");
    }
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(minAmount, maxAmount, isRecurring) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      const filterExpression = {};
      if (minAmount) {
        filterExpression.amount = { $gte: parseFloat(minAmount) }
      }
      if (maxAmount) {
        filterExpression.amount = { ...filterExpression.amount, $lte: parseFloat(maxAmount) }
      }
      if (isRecurring !== undefined) {
        filterExpression.isRecurring = JSON.parse(isRecurring.toLowerCase());
      }
      console.log(filterExpression);
      return await collection.find(filterExpression).toArray();
    }
    catch (err) {
      throw new Error("Something went wrong")
    }
  }
}

export default ExpenseRepository;
