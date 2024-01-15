// Local Modules
const env = process.env;
const Todolist = require("../models/todolist.js");

// Services
const getAllTodolists = async (userId) => {
  return Todolist.findAll({
    where: {
      userId: userId,
    },
  });
};

const getTodolistById = async (userId, todolistId) => {
  const todolist = await Todolist.findOne({
    where: {
      id: todolistId,
      userId: userId,
    },
  });
  return todolist || null;
};

const createTodolist = (req) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const priority = req.body.priority;
    const completed = req.body.completed;
    if (!title) {
      throw new Error("Title is a required field!");
    }
    const userId = req.userId;
    const todolist = Todolist.create({
      title: title,
      content: content,
      priority: priority,
      completed: completed,
      userId: userId,
    });
    return todolist;
  } catch (err) {}
  throw new Error("Unauthorized. Access token not provided");
};

const updateTodolistById = async (userId, todolistId, req) => {
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;
  const updatedPriority = req.body.priority;
  const updatedCompleted = req.body.completed;
  try {
    const todolist = await Todolist.findOne({
      where: {
        id: todolistId,
        userId: userId,
      },
    });
    if (!todolist) {
      return null;
    }
    todolist.title = updatedTitle || todolist.title;
    todolist.content = updatedContent || todolist.content;
    todolist.priority = updatedPriority || todolist.priority;
    todolist.completed = updatedCompleted || todolist.completed;
    await todolist.save();
    return todolist;
  } catch (err) {
    throw err;
  }
};

const deleteTodolistById = async (userId, todolistId) => {
  const todolist = await Todolist.findOne({
    where: {
      id: todolistId,
      userId: userId,
    },
  });
  if (!todolist) {
    return null;
  }
  await Todolist.destroy({
    where: {
      id: todolistId,
      userId: userId,
    },
  });
  return todolist;
};

module.exports = {
  getAllTodolists,
  getTodolistById,
  createTodolist,
  updateTodolistById,
  deleteTodolistById,
};
