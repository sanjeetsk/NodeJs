// Please don't change the pre-written code
// Import the necessary modules here
import { userController } from "./src/controllers/users.controller.js";

import express from "express";
import path from "path";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

app.get('/users', userController);
app.use(express.static('./src/views'))

// Implement Express GET route at the path "/users"  here

export default app;
