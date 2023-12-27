// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

// Write your code here
export const updateUser = (req, res) => {
  // Update the users array with the new data using the updateUsers function
  updateUsers(req.body);

  // Render the "update-form" view, passing the updated user data
  res.render("update-form", { user: req.body });
};
