import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";
import connectDB from "./config/db.js";

const app = express();

// Connect to DB for serverless
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Middleware
app.use(cors({ origin: "https://portfolio-frontend-delta-ruby.vercel.app" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/contact", contactRoute);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

export default app;
