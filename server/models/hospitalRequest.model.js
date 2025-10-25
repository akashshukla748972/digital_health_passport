import { Schema, model } from "mongoose";

const hospitalRequestSchema = new Schema(
  {
    hospitalId: {
      type: Schema.Types.ObjectId,
      ref: "hospital",
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    expiresAt: { type: Date },
  },
  { timestamps: true }
);
const hospitalRequestModel = model("hospitalRequest", hospitalRequestSchema);
export default hospitalRequestModel;
