import ExpenseModel from "./expense.model.js";
import ExpenseRepository from "./expense.repository.js";

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  // Create new expense
  async add(req, res) {
    try {
      console.log("body", req.body);
      const { title, amount, date , isRecurring, tags} = req.body;
      if (!title || !amount || !date) {
        return res.status(400).send({ message: 'Missing fields' });
      }
      const newExpense = new ExpenseModel(
        title,
        parseFloat(amount),
        date,
        req.body.isRecurring,
        req.body.tags || []
      );
      const createdRecord = await this.expenseRepository.addExpense(newExpense);
      return res.status(201).json(createdRecord);
    }
    catch (err) {
      throw new Error("Something went wrong");
    }
  };

  // Get a specific expense
  getOne = async (req, res) => {
    try {
      const id = req.params.id;
      const expense = await this.expenseRepository.getOne(id);
      if (!expense) {
        throw new Error("No product found", 404);
      }
      return res.status(200).json(expense);
    }
    catch (err) {
      throw new Error("Something went wrong");
    }
  };

  // Get all expenses
  getAll = async (req, res) => {
    try {
      const expenses = await this.expenseRepository.getAllExpenses();
      return res.status(200).json(expenses);
    }
    catch (err) {
      throw new Error("Something went wrong");
    }
  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    try {
      const id = req.params.id;
      const { tags } = req.body;
      const expense = await this.expenseRepository.getOne(id);

      if (!expense) {
        return res.status(404).json({ error: `Expense not found with ID: ${id}` });
      }

      if (!tags ) {
        return res.status(400).json({ error: 'Invalid or missing tags in the request body' });
      }

      await this.expenseRepository.addTagToExpense(id, tags);
      return res.status(201).send("Tag added successfully");
    } catch (err) {
      console.error("Error in addTag:", err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  // Filter expenses based on given criteria
  filter = async (req, res) => {
    try {
      const minAmount = req.query.minAmount;
      const maxAmount = req.query.maxAmount;
      const isRecurring = req.query.isRecurring;
      const result = await this.expenseRepository.filterExpenses(minAmount, maxAmount, isRecurring);
      if (!result) {
        throw new ApplicationError('Filtered data not available', 404);
      }
      else res.status(200).send(result);
    }
    catch (err) {
      throw new Error("Something went wrong");
    }
  };
}
