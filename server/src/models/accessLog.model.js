import { Schema, model } from "mongoose";

const accessLogSchema = new Schema(
  {
    hospitalId: {
      type: Schema.Types.ObjectId,
      ref: "hospital",
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    accessStart: { type: Date, required: true },
    accessEnd: { type: Date },
    isRevoked: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const accessLogModel = model("accessLog", accessLogSchema);
export default accessLogModel;
