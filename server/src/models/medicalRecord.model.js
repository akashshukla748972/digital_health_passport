import { Schema, model } from "mongoose";

const medicalRecordSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    recordType: { type: String, required: true },
    description: { type: String },
    fileUrl: { type: String },
  },
  { timestamps: true }
);
const medicalRecordModel = model("medicalRecord", medicalRecordSchema);
export default medicalRecordModel;
