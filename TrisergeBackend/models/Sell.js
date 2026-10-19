const mongoose = require("mongoose");

const sellSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      match: [/^\+?[1-9]\d{7,14}$/, "Invalid phone number"],
    },

    project: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sell", sellSchema);