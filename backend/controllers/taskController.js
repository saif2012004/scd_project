const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
});

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Private
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  // Check for user
  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.status(200).json(task);
});

// @desc    Create new task
// @route   POST /api/tasks
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { title, description, category, priority, dueDate } = req.body;

  if (!title || !description || !category || !priority || !dueDate) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const task = await Task.create({
    title,
    description,
    category,
    priority,
    dueDate,
    user: req.user.id,
  });

  res.status(201).json(task);
});

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  // Check for user
  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  // Check for user
  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await Task.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
