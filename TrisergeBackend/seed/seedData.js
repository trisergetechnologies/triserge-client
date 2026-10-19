const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

const mongoose = require("mongoose");
const Knowledge = require("../models/Knowledge");
const data = require("../data/seed.json");

// ===============================
// SEED DATABASE
// ===============================

const seed = async () => {
  try {
    // Check MongoDB URI
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in your .env file");
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Delete existing Knowledge data
    await Knowledge.deleteMany({});

    console.log("🗑️ Old knowledge data deleted");

    // Insert seed data
    await Knowledge.insertMany(data);

    console.log(`✅ ${data.length} knowledge records seeded successfully`);

    // Close MongoDB connection
    await mongoose.connection.close();

    console.log("🔌 MongoDB Connection Closed");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed Error:");
    console.error(error);

    // Close connection if open
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }

    process.exit(1);
  }
};

// Run seed
seed();