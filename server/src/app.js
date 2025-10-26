import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/error.middleware.js";
import CustomError from "./utils/CustomError.js";
import rootRouter from "./routes/index.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", (req, res) => {
  res.send("Digital Health Passport Server is Running");
});
app.use("/api/v1", rootRouter);
app.use((_, res, next) => {
  return next(new CustomError("Route not found", 404));
});
app.use(errorHandler);

export default app;
