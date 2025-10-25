import express from "express";
import {
  registerHospital,
  approveHospital,
  getHospital,
} from "../controllers/hospital.controller.js";
import { authenticateUser, authorizeRoles } from "../middlewares/auth.js";

const hospitalRouter = express.Router();

// Hospital user can register their hospital (hospital role or admin)
hospitalRouter.post(
  "/",
  authenticateUser,
  authorizeRoles("hospital", "admin"),
  registerHospital
);

// Admin approves hospital
hospitalRouter.patch(
  "/:hospitalId/approve",
  authenticateUser,
  authorizeRoles("admin"),
  approveHospital
);

// Get hospital details (admin, hospital(owner) or doctor)
hospitalRouter.get(
  "/:hospitalId",
  authenticateUser,
  authorizeRoles("admin", "hospital", "doctor"),
  getHospital
);

export default hospitalRouter;
