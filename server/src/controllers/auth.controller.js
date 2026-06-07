import { loginUser, registerUser } from "../services/auth.service.js";
import sendResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await registerUser({ name, email, password });
  sendResponse(res, 201, 'User registered successfully', user);
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const data = await loginUser({ email, password });
  sendResponse(res, 200, 'Login successful', data);
});