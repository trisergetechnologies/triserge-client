
const Knowledge = require("../models/Knowledge");
const { askAI } = require("../services/aiService");

const chatHandler = async (req, res) => {
  try {
    console.log("=================================");
    console.log("📦 Request body:", req.body);
    console.log("=================================");

    // Accept both "question" and "message"
    const question = req.body.question || req.body.message;

    // Validate question
    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
        receivedBody: req.body,
      });
    }

    console.log("💬 Question:", question);

    // Get knowledge from MongoDB
    const docs = await Knowledge.find().limit(10);

    console.log("📚 Knowledge records:", docs.length);

    // Create AI context
    const context = docs
      .map(
        (doc) =>
          `Q: ${doc.question}\nA: ${doc.answer}`
      )
      .join("\n\n");

    console.log("🧠 Context created");

    // Ask AI
    const answer = await askAI(question, context);

    console.log("✅ AI response received");

    // Send response
    return res.status(200).json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("❌ Chat Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chatHandler,
};

