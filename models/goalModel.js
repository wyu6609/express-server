import mongoose from "mongoose";

//goal schema
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

// convert schema to model
export const Goal = mongoose.model("Goal", goalSchema);
