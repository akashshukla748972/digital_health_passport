import emergencyInfoModel from "../models/EmergencyInfo.model.js";
import CustomeError from "../utils/CustomError.js";

// Add / Update Emergency Info
export const upsertEmergencyInfo = async (req, res, next) => {
  try {
    const {
      userId,
      bloodGroup,
      emergencyContactName,
      emergencyContactPhone,
      allergies,
      chronicConditions,
      medications,
    } = req.body;

    const info = await emergencyInfoModel.findOneAndUpdate(
      { userId },
      {
        bloodGroup,
        emergencyContactName,
        emergencyContactPhone,
        allergies,
        chronicConditions,
        medications,
      },
      { new: true, upsert: true }
    );

    res
      .status(200)
      .json({ success: true, message: "Emergency info saved", data: info });
  } catch (error) {
    console.error(error);
    return next(new CustomeError("Something went wrong", 500));
  }
};

// Get Emergency Info
export const getEmergencyInfo = async (req, res, next) => {
  try {
    const info = await emergencyInfoModel.findOne({
      userId: req.params.userId,
    });
    if (!info) return next(new CustomeError("Emergency info not found", 404));

    res.status(200).json({ success: true, data: info });
  } catch (error) {
    console.error(error);
    return next(new CustomeError("Something went wrong", 500));
  }
};
