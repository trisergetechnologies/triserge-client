const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },

    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
     match: [/^\+?[1-9]\d{7,14}$/, "Invalid phone number"]
    },

    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Contact", contactSchema);