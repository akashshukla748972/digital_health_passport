import userModel from "../models/user.model.js";
import CustomError from "../utils/CustomError.js";

export const getProfile = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");
    if (!user) return next(new CustomError("User not found", 404));

    res.status(200).json({ isSuccess: true, data: user });
  } catch (error) {
    console.error(error);
    next(new CustomError("Something went wrong", 500));
  }
};
export const updateProfile = async (req, res, next) => {
  try {
    const updates = req.body;
    const user = await userModel
      .findByIdAndUpdate(req.user.id, updates, {
        new: true,
        runValidators: true,
      })
      .select("-password");
    if (!user) return next(new CustomError("User not found", 404));

    res.status(200).json({ isSuccess: true, data: user });
  } catch (error) {
    console.error(error);
    next(new CustomError("Something went wrong", 500));
  }
};
