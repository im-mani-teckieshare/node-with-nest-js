const { Router } = require('express');
const controller = require('../controller/user-controller');
const app = Router();

app.post('/', controller.createUser);
app.get('/:userId/organizations', controller.getOrganizations);

module.exports = app;