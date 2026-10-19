const Sell = require("../models/Sell");
const transporter = require("../config/mailer");

const createSell = async (req, res) => {
  try {
    const { name, email, phone, project } = req.body;

    // ✅ 1. Empty validation
    if (!name || !email || !phone || !project) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ 2. Name validation
    if (name.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 2 characters",
      });
    }

    // ✅ 3. Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // ✅ 4. Phone validation (IMPORTANT FIX)
    const phoneRegex = /^\+?[1-9]\d{7,14}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid mobile number (use +91XXXXXXXXXX)",
      });
    }

    // ✅ 5. Project validation
   if (!project || project.trim().length === 0 || project.length > 100) {
  return res.status(400).json({
    success: false,
    message: "Project message must be between 1 and 100 characters",
  });
}

    // ✅ Save in DB
    const sell = await Sell.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      project: project.trim(),
    });

    // ✅ Email to user
    await transporter.sendMail({
      from: `"Triserge Technologies" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Project Submission Received ",
      html: `
        <h2>Hi ${name},</h2>
        <p>Your project has been submitted successfully.</p>
        <p>Our team will review it and contact you soon.</p>
        <br/>
        <p><strong>Your Project:</strong></p>
        <p>${project}</p>
      `,
    });

    // ✅ Email to admin
    await transporter.sendMail({
      from: `"New Project" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Project Submission",
      html: `
        <h3>New Project Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project:</strong> ${project}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Project submitted successfully",
    });

  } catch (error) {
    console.error("Sell Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { createSell };