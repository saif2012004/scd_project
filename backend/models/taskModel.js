const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      enum: ["Work", "Personal", "Shopping", "Health", "Other"],
    },
    priority: {
      type: String,
      required: [true, "Please add a priority"],
      enum: ["High", "Medium", "Low"],
    },
    status: {
      type: String,
      required: [true, "Please add a status"],
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    dueDate: {
      type: Date,
      required: [true, "Please add a due date"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
