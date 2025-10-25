import accessLogModel from "../models/AccessLog.model.js";
import CustomError from "../utils/CustomError.js";

// Revoke Access (User)
export const revokeAccess = async (req, res, next) => {
  try {
    const { logId } = req.params;

    const log = await accessLogModel.findById(logId);
    if (!log) return next(new CustomError("Access log not found", 404));

    log.isRevoked = true;
    log.accessEnd = new Date();
    await log.save();

    res
      .status(200)
      .json({ success: true, message: "Access revoked", data: log });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};

// Get Access Logs
export const getAccessLogs = async (req, res, next) => {
  try {
    const logs = await accessLogModel.find({ userId: req.params.userId });
    res.status(200).json({ isSuccess: true, data: logs });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};
