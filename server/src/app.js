import express from "express";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Digital Health Passport Server is Running");
});

export default app;
