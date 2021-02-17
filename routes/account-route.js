const { Router } = require('express');
const controller = require('../controller/user-controller');
const app = Router();

app.post('/login', controller.createUser);

module.exports = app;