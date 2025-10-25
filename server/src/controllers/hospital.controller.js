import hospitalModel from "../models/hospital.model.js";
import userModel from "../models/user.model.js";
import CustomError from "../utils/CustomError.js";

// Register Hospital
export const registerHospital = async (req, res) => {
  try {
    const { userId, name, phone, email, address } = req.body;

    const existingHospital = await hospitalModel.findOne({ userId });
    if (existingHospital)
      return next(new CustomError("Hospital already registered", 400));

    const hospital = new hospitalModel({ userId, name, phone, email, address });
    await hospital.save();

    res.status(201).json({
      isSuccess: true,
      message: "Hospital registered",
      data: hospital,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ isSuccess: false, message: "Something went wrong" });
  }
};

// Approve Hospital (Admin Only)
export const approveHospital = async (req, res) => {
  try {
    const { hospitalId } = req.params;

    const hospital = await hospitalModel.findById(hospitalId);
    if (!hospital) return next(new CustomError("Hospital not found", 404));

    hospital.isApproved = true;
    await hospital.save();

    res
      .status(200)
      .json({ isSuccess: true, message: "Hospital approved", data: hospital });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};

// Get Hospital Details
export const getHospital = async (req, res) => {
  try {
    const hospital = await hospitalModel
      .findById(req.params.hospitalId)
      .populate("userId", "fullName email");
    if (!hospital) return next(new CustomError("Hospital not found", 404));

    res.status(200).json({ isSuccess: true, data: hospital });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};
// Update Hospital Details
export const updateHospital = async (req, res) => {
  try {
    const { hospitalId } = req.params;
    const updates = req.body;

    const hospital = await hospitalModel.findByIdAndUpdate(
      hospitalId,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!hospital) return next(new CustomError("Hospital not found", 404));

    res
      .status(200)
      .json({ isSuccess: true, message: "Hospital updated", data: hospital });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};
// Delete Hospital
export const deleteHospital = async (req, res) => {
  try {
    const { hospitalId } = req.params;

    const hospital = await hospitalModel.findByIdAndDelete(hospitalId);
    if (!hospital) return next(new CustomError("Hospital not found", 404));

    res
      .status(200)
      .json({ isSuccess: true, message: "Hospital deleted", data: hospital });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};
