const Contact = require("../models/Contact");
const transporter = require("../config/mailer");

const createContact = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      mobile,
      message,
    });

    // USER EMAIL
    await transporter.sendMail({
      from: `"Triserge Technologies" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting us.</p>
        <p>We will reach you soon.</p>
        <p><b>Your Message:</b> ${message}</p>
      `,
    });

    // ADMIN EMAIL
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
       data: contact
    });

  } catch (error) {
    console.error("Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { createContact };