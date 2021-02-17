const { Router } = require('express');
const controller = require('../controller/orgnization-controller');
const app = Router();

app.post('/', controller.creatOrganization);
app.get('/:orgId/users', controller.getUsers);
app.post('/:orgId/users', controller.mapUser);

module.exports = app;