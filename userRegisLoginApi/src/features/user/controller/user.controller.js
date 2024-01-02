// Please don't change the pre-written code
// Import the necessary modules here
import { addUser, confirmLogin, getAllUsers } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  // Write your code here
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ status: 'failure', msg: 'Invalid user details' });
  }

  const newUser = addUser({ name, email, password });

  res.status(201).json({ status: 'success', user: newUser });
};

export const loginUser = (req, res) => {
  // Write your code here
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: 'failure', msg: 'Invalid user details' });
  }

  const loginSuccessful = confirmLogin({ email, password });

  if (loginSuccessful) {
    res.status(200).json({ status: 'success', msg: 'Login successful' });
  } else {
    res.status(400).json({ status: 'failure', msg: 'Invalid user details' });
  }
};
