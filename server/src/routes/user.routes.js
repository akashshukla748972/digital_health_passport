import express from "express";
import { getProfile } from "../controllers/user.controller.js";
import { authenticateUser } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get("/profile", authenticateUser, getProfile);

export default userRouter;
