const express = require("express");
const router = express.Router();
// const Todo = require("../models/todolist");
const { ObjectId } = require("mongodb");
const { json } = require("express/lib/response");
const todoList = require("../back/back");

router.get("/todo", todoList.getTodo);
router.post("/todo", todoList.createTodo);
router.put("/todo", todoList.updateTodo);
router.delete("/todo", todoList.deleteTodo);

module.exports = router;
