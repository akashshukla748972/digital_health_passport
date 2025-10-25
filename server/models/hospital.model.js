import { Schema, model } from "mongoose";

const hospitalSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const hospitalModel = model("hospital", hospitalSchema);
export default hospitalModel;
