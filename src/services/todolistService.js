// Local Modules
const Todolist = require("../models/user.js");

// Services
const getAllTodolists = () => {
  return Todolist.findAll();
};

const getTodolistById = async (id) => {
  const todolist = await Todolist.findByPk(id);
  return todolist || null;
};

const createTodolist = (req) => {
  const title = req.body.title;
  const content = req.body.content;
  const priority = req.body.priority;
  const completed = req.body.completed;
  if (!title) {
    throw new Error("Title is a required field!");
  }
  const todolist = Todolist.create({
    title: title,
    content: content,
    priority: priority,
    completed: completed,
  });
  return todolist;
};

const updateTodolistById = async (id, req) => {
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;
  const updatedPriority = req.body.priority;
  const updatedCompleted = req.body.completed;
  try {
    const todolist = await findByPk(id);
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

const deleteTodolistById = async (id) => {
  const todolist = await Todolist.findByPk(id);
  if (!todolist) {
    return null;
  }
  await Todolist.destroy({
    where: {
      id: id,
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
