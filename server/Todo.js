const mongoose = require("mongoose");

const Todo = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true },
    date: { type: Date, default: new Date() },
    isComplete: { type: Boolean, default: false }
  },
  { usePushEach: true }
);

module.exports = mongoose.model("Todo", Todo);
