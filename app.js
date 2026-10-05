import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/contact", contactRoute);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

export default app;
