

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// 🔥 IMPORTANT: phone-input-2 gives international format
// Example: 919876543210
const isValidMobile = (mobile) => {
  return /^[0-9]{10,15}$/.test(mobile);
};

// ==============================
// ✅ CONTACT VALIDATION
// ==============================
const validateContact = (req, res, next) => {
  const { name, email, mobile, message } = req.body;

  if (!name || !email || !mobile || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address",
    });
  }

  if (!isValidMobile(mobile)) {
    return res.status(400).json({
      success: false,
      message: "Invalid mobile number",
    });
  }

 if (!message) {
  return res.status(400).json({
    success: false,
    message: "Message is required",
  });
}

if (message.length < 10) {
  return res.status(400).json({
    success: false,
    message: "Message should be at least 10 characters",
  });
}

const wordCount = message.trim().split(/\s+/).length;

if (wordCount > 50) {
  return res.status(400).json({
    success: false,
    message: "Message should not exceed 100 words",
  });
}

  next();
};

module.exports = {
  validateContact,
};