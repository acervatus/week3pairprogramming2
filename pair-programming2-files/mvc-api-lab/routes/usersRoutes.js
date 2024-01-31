const express = require('express');
const usersController = require('../controllers/usersController');
const usersRouter = express.Router();
usersRouter.get('/', usersController.getAllMembers);
module.exports = usersRouter;
