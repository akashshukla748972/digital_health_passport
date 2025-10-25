import express from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);

export default rootRouter;
