import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import goalRoutes from "./routes/goalRoutes.js";

const PORT = process.env.PORT || 5000;

const app = express();

//route
app.use("/api/goals", goalRoutes); // "/api/goals is our root"

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
