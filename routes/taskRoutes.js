// src/routes/taskRoutes.js

const express = require('express');
const { addTask, getTasks } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware'); // Optional: if you want protected routes

const router = express.Router();

// Route to add a task
router.post('/', protect, addTask); // Make sure addTask is defined and imported

// Route to get tasks
router.get('/', protect, getTasks); // Make sure getTasks is defined and imported

module.exports = router;
