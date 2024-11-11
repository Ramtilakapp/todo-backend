// src/controllers/taskController.js

const Task = require('../models/Task'); // Assuming you have a Task model

// Add a new task
const addTask = async (req, res) => {
  const { taskName } = req.body;
  const userId = req.userId; // Make sure you're extracting user ID from the JWT token if needed

  try {
    const task = new Task({
      taskName,
      userId
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all tasks for a user
const getTasks = async (req, res) => {
  const userId = req.userId; // Ensure you're using authenticated user's ID

  try {
    const tasks = await Task.find({ userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addTask, getTasks };

