import mongoose from "mongoose";
import { gv } from "./global_variable.js";

export const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(gv.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
