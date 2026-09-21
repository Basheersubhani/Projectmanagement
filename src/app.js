import express from "express";
import cors from "cors";
let app = express();
//basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
//cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);
import healthcheckRouter from "./routes/Healthcheck.routes.js";
app.use("/api/v1/healthcheck", healthcheckRouter);
app.get("/", (req, res) => {
  res.send("This is home page");
});
app.get("/about", (req, res) => {
  res.send("This is a about page");
});
app.get("/readme", (req, res) => {
  res.send("THis is readme file");
});
export default app;
