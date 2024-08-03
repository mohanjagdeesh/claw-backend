const express = require("express");
const router = express.Router();
const TodoModel = require("../models/todos");

// Define a simple route
router.get("/", async (req, res) => {
  try {
    const { username } = req.query;
    const todos = await TodoModel.find({ username });
    res.status(200).json({ todos });
  } catch (error) {
    console.log(error);
  }
});

// Create a Todo
router.post("/", async (req, res) => {
  try {
    const { username, todoName } = req.body;
    const todo = new TodoModel({
      username,
      todoName,
    });
    const result = await todo.save();
    if (result._id) {
      res.status(201).json({ message: "Todo added successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Delete a Todo
router.delete("/", async (req, res) => {
  try {
    const { todoId } = req.query;
    const todos = await TodoModel.deleteOne({ _id: todoId });
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Update a Todo
router.put("/", async (req, res) => {
  try {
    const { name, id } = req.body;
    const result = await TodoModel.updateOne(
      { _id: id },
      { $set: { todoName: name } }
    );
    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Update a Todo
router.put("/checked", async (req, res) => {
  try {
    const { _id: uniqueId, checked } = req.body;
    const result = await TodoModel.updateOne(
      { _id: uniqueId },
      { $set: { completed: checked } }
    );
    res
      .status(200)
      .json({ message: "Yahoo you completed your task successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Export the router
module.exports = router;
