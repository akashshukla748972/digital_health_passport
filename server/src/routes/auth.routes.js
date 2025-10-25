import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";

const authRouter = express.Router();

// Public Routes
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

export default authRouter;
