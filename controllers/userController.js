import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import asyncHandler from "express-async-handler";

// import user model

// @desc Register new user
// @router POST /api/users
// @access PUBLIC

const registerUser = asyncHandler(async (request, response) => {});
const loginUser = asyncHandler(async (request, response) => {});
const getMe = asyncHandler(async (request, response) => {});

//Generate JWT

const generateToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};
