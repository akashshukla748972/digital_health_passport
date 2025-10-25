import medicalRecordModel from "../models/medicalRecord.model.js";
import CustomError from "../utils/CustomError.js";

// Add Medical Record
export const addMedicalRecord = async (req, res, next) => {
  try {
    const { userId, recordType, description, fileUrl } = req.body;

    const record = new medicalRecordModel({
      userId,
      recordType,
      description,
      fileUrl,
    });
    await record.save();

    res
      .status(201)
      .json({ isSuccess: true, message: "Medical record added", data: record });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};

// Get User Medical Records
export const getMedicalRecords = async (req, res, next) => {
  try {
    const records = await medicalRecordModel.find({
      userId: req.params.userId,
    });
    res.status(200).json({ isSuccess: true, data: records });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};

// Delete Medical Record
export const deleteMedicalRecord = async (req, res, next) => {
  try {
    const record = await medicalRecordModel.findByIdAndDelete(
      req.params.recordId
    );
    if (!record) return next(new CustomError("Record not found", 404));

    res
      .status(200)
      .json({ isSuccess: true, message: "Medical record deleted" });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};
