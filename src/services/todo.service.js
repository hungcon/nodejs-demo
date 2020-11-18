const TodoModel = require('../models/todo.model.js');

const TodoService = {}

TodoService.getAllTodos = async () => {
    return await TodoModel.find({});
}