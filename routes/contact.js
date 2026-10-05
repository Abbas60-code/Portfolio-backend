import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact - Save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
