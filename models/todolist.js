const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = mongoose.connection;

const todoSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: [true, "Enter the title!"],
  },
  checked_date: {
    type: Date,
    default: undefined,
  },
  isDone: {
    type: Boolean,
  },
  orderId: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("todo", todoSchema);
