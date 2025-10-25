import accessLogModel from "../models/AccessLog.model.js";
import hospitalRequestModel from "../models/hospitalRequest.model.js";
import CustomError from "../utils/CustomError.js";

// Request Access (Hospital -> User)
export const requestAccess = async (req, res, next) => {
  try {
    const { hospitalId, userId } = req.body;

    const request = new hospitalRequestModel({
      hospitalId,
      userId,
      status: "pending",
    });
    await request.save();

    res
      .status(201)
      .json({ isSuccess: true, message: "Access requested", data: request });
  } catch (error) {
    console.error(error);
    next(new CustomError("Something went wrong", 500));
  }
};

// Approve Access (User)
export const approveAccess = async (req, res, next) => {
  try {
    const { requestId } = req.params;

    const request = await hospitalRequestModel.findById(requestId);
    if (!request) return next(new CustomError("Request not found", 404));

    request.status = "approved";
    request.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await request.save();

    // Log access
    const log = new accessLogModel({
      hospitalId: request.hospitalId,
      userId: request.userId,
      accessStart: new Date(),
      accessEnd: request.expiresAt,
    });
    await log.save();

    res
      .status(200)
      .json({ isSuccess: true, message: "Access approved", data: request });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};

// Reject Access
export const rejectAccess = async (req, res, next) => {
  try {
    const { requestId } = req.params;

    const request = await hospitalRequestModel.findById(requestId);
    if (!request) return next(new CustomError("Request not found", 404));

    request.status = "rejected";
    await request.save();

    res
      .status(200)
      .json({ isSuccess: true, message: "Access rejected", data: request });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Something went wrong", 500));
  }
};
