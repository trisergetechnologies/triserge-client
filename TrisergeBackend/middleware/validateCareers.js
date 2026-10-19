

const validateCareer = (req, res, next) => {
  const {
    name,
    email,
    mobile,
    location,
    graduation,
    skills,
    role,
  } = req.body;

  // ✅ Required
  if (!name || !email || !mobile || !role) {
    return res.status(400).json({
      success: false,
      message: "Name, Email, Mobile, Role are required",
    });
  }

  // ✅ Email
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email",
    });
  }

  // ✅ Mobile
  if (!/^[0-9]{10,15}$/.test(mobile)) {
    return res.status(400).json({
      success: false,
      message: "Invalid mobile number",
    });
  }

  // ✅ Resume
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Resume is required",
    });
  }

  // ✅ File size (extra safety)
  if (req.file.size > 2 * 1024 * 1024) {
    return res.status(400).json({
      success: false,
      message: "Resume must be less than 2MB",
    });
  }

  // ============================
  // 🔥 CHARACTER LIMITS (BEST)
  // ============================

  // Name → max 80 characters

  if (name.length > 80) {
    return res.status(400).json({
      success: false,
      message: "Name should not exceed 80 characters",
    });
  }

  // Location → max 80 characters
  if (location && location.length > 80) {
    return res.status(400).json({
      success: false,
      message: "Location should not exceed 80 characters",
    });
  }

  // Graduation → max 120 characters

  if (graduation && graduation.length > 50) {
    return res.status(400).json({
      success: false,
      message: "Graduation should not exceed 50 characters",
    });
  }

  // Skills → keep word limit (better for text fields)
  const countWords = (text) =>
    text?.trim() ? text.trim().split(/\s+/).length : 0;

  if (skills && countWords(skills) > 100) {
    return res.status(400).json({
      success: false,
      message: "Skills should not exceed 100 words",
    });
  }

  next();
};

module.exports = {
  validateCareer,
};