import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";

const router = express.Router();

// //GET all GOALS ROUTE
// router.get("/", getGoals);

// // CREATE GOAL
// router.post("/", setGoal);

router.route("/").get(getGoals).post(setGoal);

// // UPDATE GOAL
// router.put("/:id", updateGoal);

// // DELETE GOAL
// router.delete("/:id", deleteGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);

export default router;
