const express = require('express');

const TodoController = require('../controllers/todo.controller.js');

const router = express.Router();

router.get("/", (req, res) => TodoController.getAllTodos(req, res));

module.exports = router;