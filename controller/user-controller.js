const Joi = require('joi');
const userModel = require('../model/user-model');
const userOrgModel = require('../model/user-org-model');
const app = {};

const schema = Joi.object({
  name: Joi.any().required(),
  email: Joi.string().email().required(),
  address: Joi.any(),
})

app.createUser = (req, res) => {
  const user = req.body;
  schema.validateAsync(user).then(async () => {
    const response = userModel.bulkInsert(user);
    res.send(response);
  });
}

app.getOrganizations = async (req, res) => {
  const { userId } = req.params;
  const response = userOrgModel.getOrganizations(userId)
  res.send(response);
}

module.exports = app;