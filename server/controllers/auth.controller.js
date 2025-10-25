import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import CustomeError from "../utils/CustomeError.js";
import gv from "../config/globalVariables.js";

const JWT_SECRET = gv.JWT_SECRET || "djfaisfasd4f5asd4f";

// Register
export const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, password, role } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return next(new CustomeError("Email already exists", 400));

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      fullName,
      email,
      phone,
      password: hashedPassword,
      role,
    });
    await user.save();

    res.status(201).json({
      isSuccess: true,
      message: "User registered successfully",
      data: { id: user._id, fullName, email, phone, role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ isSuccess: false, message: "Something went wrong" });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return next(new CustomeError("Invalid credentials", 400));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(new CustomeError("Invalid credentials", 400));

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      isSuccess: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    next(new CustomeError("Something went wrong", 500));
  }
};
