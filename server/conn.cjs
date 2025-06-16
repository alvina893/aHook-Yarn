const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
server.use(express.json());

// Your POST route
server.post("/signup", (req, res) => {
  res.json(req.body);
});

// MongoDB connection
mongoose
  .connect(process.env.DB_URI, { autoIndex: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    server.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  });
