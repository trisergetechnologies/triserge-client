// controllers/careerController.js
const Career = require("../models/Career");
const nodemailer = require("nodemailer");

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.applyJob = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      location,
      graduation,
      skills,
      role,
    } = req.body;

    // ✅ Duplicate check
    const existing = await Career.findOne({ email, role });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "You already applied for this role",
      });
    }

    const rawUrl = req.file.path;

    const viewUrl = rawUrl.replace("/upload/", "/upload/fl_inline/");

    const resumeData = {
      url: viewUrl,
      public_id: req.file.filename,
    };

    const newApplication = await Career.create({
      name,
      email,
      mobile,
      location,
      graduation,
      skills,
      role,
      resume: resumeData,
    });

    // Email
    await transporter.sendMail({
      from: `"Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Application - ${role}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Skills:</b> ${skills}</p>
        <p><a href="${resumeData.url}">View Resume</a></p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: newApplication,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ Admin: Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const data = await Career.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};