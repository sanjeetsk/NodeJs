// Please don't change the pre-written code
// Import the necessary modules here
import { blogs } from "../models/blog.model.js";

export const renderBlogs = (req, res) => {
  // Write your code here
  res.render('blogs', { blogs: blogs });
};
export const renderBlogForm = (req, res) => {
  // Write your code here
  res.render('addBlogForm');
};
export const addBlog = (req, res) => {
  // Write your code here
  const { title, description, img } = req.body;
  const newBlog = {
    title: title,
    description: description,
    img: img
  }
  blogs.push(newBlog);
  console.log("newBlog", newBlog);
  res.render('blogs', { blogs: blogs });
};
