const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    todoName: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model("Todos", todoSchema);

module.exports = TodoModel;
