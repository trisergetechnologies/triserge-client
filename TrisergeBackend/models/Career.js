// models/Career.js
const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, index: true },
    mobile: { type: String, required: true },
    location: String,
    graduation: String,
    skills: String,
    role: String,

    resume: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", careerSchema);