import express from "express";

const router = express.Router();

//GET all GOALS ROUTE
router.get("/", (request, response) => {
  response.status(200).json({ message: "Get Goals" });
});

// GET single GOAL
router.get("/:id", (request, response) => {
  response.status(200).json({ message: "Get single goal" });
});

// CREATE GOAL
router.post("/", (request, response) => {
  response.status(200).json({ message: "Create a goal" });
});

// UPDATE GOAL

// request.params.id refers to :id
router.put("/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `Update a goal (${request.params.id})` });
});
// DELETE GOAL
router.delete("/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `Delete goal id: ${request.params.id}` });
});
export default router;
