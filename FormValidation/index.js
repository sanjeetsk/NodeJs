import express from "express";
import { renderBlogForm } from "./blog.controller.js";
import validateRequest from "./middleware/validation.middleware.js";
import { validateBlog } from "./blog.controller.js";
import path from "path";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", renderBlogForm);
app.post("/addblog",validateRequest, validateBlog);

export default app;
