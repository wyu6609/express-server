// import schema from models
import Goal from "../models/goalModel.js";
// callback functions for routes

import asyncHandler from "express-async-handler";

// GET goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (request, response) => {
  const goals = await Goal.find();
  response.status(200).json(goals);
});

// @desc Create a new Goal
// @route POST /api/goals
// @access Private
export const setGoal = asyncHandler(async (request, response) => {
  //error handling
  if (!request.body.text) {
    response.status(400);
    throw new Error("Please add a textfield");
  }

  response.status(200).json({ message: "set goal" });
});

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "Update goal" });
});

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "Delete goal" });
});
