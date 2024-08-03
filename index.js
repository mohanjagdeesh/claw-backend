const express = require("express");
const clawApp = express();
const connectDB = require("./database");
const todosRoute = require("./routes/todosRoute");
const cors = require("cors");
clawApp.use(express.json());
clawApp.use(cors());
require("dotenv").config();

// MongoDB Connection
connectDB();

// External routes
clawApp.use("/todos", todosRoute);

clawApp.listen(process.env.PORT, function () {
  console.log(`Claw App Listening on Port Number: ${process.env.PORT}`);
});
