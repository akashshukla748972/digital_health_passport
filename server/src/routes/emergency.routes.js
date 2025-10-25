import express from "express";
import {
  upsertEmergencyInfo,
  getEmergencyInfo,
} from "../controllers/emergency.controller.js";
import { authenticateUser, authorizeRoles } from "../middlewares/auth.js";

const emergencyRouter = express.Router();

emergencyRouter.post(
  "/",
  authenticateUser,
  authorizeRoles("user", "admin", "doctor"),
  upsertEmergencyInfo
);

emergencyRouter.get(
  "/:userId",
  authenticateUser,
  authorizeRoles("user", "admin", "doctor"),
  getEmergencyInfo
);

export default emergencyRouter;
