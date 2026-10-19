require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const sellRoutes = require("./routes/sellRoutes");
const careerRoutes = require("./routes/careerRoutes");
const chatRoutes = require("./routes/chatRoutes");

const chatLeadRoutes = require("./routes/chatLeadRoutes");

const app = express();

// ===============================
// DATABASE
// ===============================
connectDB();

// ===============================
// MIDDLEWARE
// ===============================
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use(
  cors({
    origin: "http://localhost:3005",
    credentials: true,
  })
);

// ===============================
// ROUTES
// ===============================
app.use("/api/contact", contactRoutes);
app.use("/api/sell", sellRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/chat", chatLeadRoutes);

// ===============================
// CHATBOT API TEST
// ===============================
app.get("/api/chat", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Chatbot API is working 🚀",
  });
});

// ===============================
// ERROR HANDLER
// ===============================
app.use((err, req, res, next) => {
  if (err.message === "Only PDF, DOC, DOCX allowed") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "File too large (Max 2MB)",
    });
  }

  console.error("❌ Server Error:", err);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});

// ===============================
// SERVER
// ===============================
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});