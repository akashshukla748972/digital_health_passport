import express from "express";
import {
  revokeAccess,
  getAccessLogs,
} from "../controllers/access.controller.js";
import { authenticateUser, authorizeRoles } from "../middlewares/auth.js";

const accessRouter = express.Router();

// Revoke access by logId (user)
accessRouter.patch(
  "/:logId/revoke",
  authenticateUser,
  authorizeRoles("user"),
  revokeAccess
);

// Get logs for a user
accessRouter.get(
  "/user/:userId",
  authenticateUser,
  authorizeRoles("user", "hospital", "admin", "doctor"),
  getAccessLogs
);

export default accessRouter;
