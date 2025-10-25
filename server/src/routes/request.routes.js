import express from "express";
import {
  requestAccess,
  approveAccess,
  rejectAccess,
} from "../controllers/request.controller.js";
import { authenticateUser, authorizeRoles } from "../middlewares/auth.js";

const requestRouter = express.Router();

// Hospital requests access to a user
requestRouter.post(
  "/",
  authenticateUser,
  authorizeRoles("hospital"),
  requestAccess
);

// User approves request (creates AccessLog with 24h expiry in controller)
requestRouter.patch(
  "/:requestId/approve",
  authenticateUser,
  authorizeRoles("user"),
  approveAccess
);

// User rejects
requestRouter.patch(
  "/:requestId/reject",
  authenticateUser,
  authorizeRoles("user"),
  rejectAccess
);

export default requestRouter;
