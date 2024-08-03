const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
