import express from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import hospitalRouter from "./hospital.routes.js";
import medicalRouter from "./medical.routes.js";
import requestRouter from "./request.routes.js";
import accessRouter from "./access.routes.js";
import emergencyRouter from "./emergency.routes.js";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/hospitals", hospitalRouter);
rootRouter.use("/medical", medicalRouter);
rootRouter.use("/requests", requestRouter);
rootRouter.use("/access", accessRouter);
rootRouter.use("/emergency", emergencyRouter);

export default rootRouter;
