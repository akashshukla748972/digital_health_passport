import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "hospital", "doctor", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);
const userModel = model("user", userSchema);
export default userModel;
