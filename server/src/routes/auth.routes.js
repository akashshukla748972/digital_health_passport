import express from "express";
import {
  registerUser,
  loginUser,
  checkAuth,
} from "../controllers/auth.controller.js";
import { authenticateUser } from "../middlewares/auth.js";

const authRouter = express.Router();

// Public Routes
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/check-auth", authenticateUser, checkAuth);

export default authRouter;
