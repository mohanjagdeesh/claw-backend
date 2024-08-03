const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://revanth180:7NlBBUfheV9Nw23b@cluster0.sjn6rgx.mongodb.net/"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
