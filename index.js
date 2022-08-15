import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import "dotenv/config";
import goalRoutes from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json()); //for req.body
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler); // error handler for response

//route
app.use("/api/goals", goalRoutes); // "/api/goals is our root"

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
