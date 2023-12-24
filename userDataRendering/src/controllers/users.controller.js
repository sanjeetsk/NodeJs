// Please don't change the pre-written code
// Import the necessary modules here
import { userModel } from '../models/users.model.js';

export const userController = async (req, res) => {
  const userData = await userModel();
  // Write your code here 
  res.render("index", { userData: userData })
};

