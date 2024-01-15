// Local Modules
const todolistService = require("../services/todolistService.js");

// Controllers
const getAllTodolists = async (req, res, next) => {
  try {
    const todolists = await todolistService.getAllTodolists();
    res.status(200).json({ todolists: todolists });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getTodolistById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const todolist = await todolistService.getTodolistById(id);
    if (!todolist) {
      return res.status(404).json({ message: "Todolist not found!" });
    }
    res.status(200).json({ todolist: todolist });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
const createTodolist = (req, res, next) => {
  try {
    const todolist = todolistService.createTodolist(req);
    res.status(201).json({
      message: "Todolist created!",
      todolist: todolist,
    });
  } catch (err) {
    if (err.message.includes("required field")) {
      res.status(400).json({ error: err.message });
    }
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
const updateTodolistById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const todolist = await todolistService.updateTodolistById(id, req);
    if (!todolist) {
      return res.status(404).json({ message: "Todolist not found!" });
    }
    res.status(201).json({ message: "Todolist updated!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteTodolistById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const todolist = await todolistService.deleteTodolistById(id);
    if (!todolist) {
      return res.status(404).json({ message: "Todolist not found!" });
    }
    res.status(200).json({ message: "Todolist deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllTodolists,
  getTodolistById,
  createTodolist,
  updateTodolistById,
  deleteTodolistById,
};
