import { Schema, model } from "mongoose";

const emergencyInfoSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    bloodGroup: { type: String },
    emergencyContactName: { type: String },
    emergencyContactPhone: { type: String },
    allergies: { type: String },
    chronicConditions: { type: String },
    medications: { type: String },
  },
  { timestamps: true }
);
const emergencyInfoModel = model("emergencyInfo", emergencyInfoSchema);
export default emergencyInfoModel;
