

const ChatLead = require("../models/ChatLead");

const createChatLead = async (req, res) => {
  try {
    const {
      sessionId,
      name,
      email,
      mobile,
      query,
    } = req.body;

    // Validate required fields
    if (
      !sessionId ||
      !name ||
      !email ||
      !mobile ||
      !query
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create lead
    const lead = await ChatLead.create({
      sessionId,
      name,
      email,
      mobile,
      query,
    });

    console.log("✅ Chat lead saved:", lead._id);

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      lead,
    });
  } catch (error) {
    console.error("❌ Chat Lead Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createChatLead,
};

