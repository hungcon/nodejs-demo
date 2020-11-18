const TodoService = require('../services/todo.service.js');

const TodoController = {};

TodoController.getAllTodos = async (req, res) => {
    try {
        const todos = await TodoService.getAllTodos();
        return res.status(200).json({
            todos: todos
        })
    } catch (error) {
        res.status(400);
    }
};

module.exports = TodoController;