import dotenv from "dotenv";
dotenv.config();

export const gv = {
  port: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
