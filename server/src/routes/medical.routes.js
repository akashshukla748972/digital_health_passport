import express from "express";
import {
  addMedicalRecord,
  getMedicalRecords,
  deleteMedicalRecord,
} from "../controllers/medical.controller.js";
import { authenticateUser, authorizeRoles } from "../middlewares/auth.js";

const medicalRouter = express.Router();

medicalRouter.post(
  "/",
  authenticateUser,
  authorizeRoles("user", "doctor", "admin"),
  addMedicalRecord
);

// Get records for a userId
medicalRouter.get(
  "/user/:userId",
  authenticateUser,
  authorizeRoles("user", "doctor", "admin"),
  getMedicalRecords
);

// Delete record (owner or admin)
medicalRouter.delete(
  "/:recordId",
  authenticateUser,
  authorizeRoles("user", "doctor", "admin"),
  deleteMedicalRecord
);

export default medicalRouter;
