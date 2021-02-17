const Joi = require('joi');
const userModel = require('../model/user-model');
const userOrgModel = require('../model/user-org-model');
const jwt = require('jsonwebtoken');
require('dotenv').config().parsed;
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

app.login = async (req, res) => {
  let userData = req.body;
  let response = await userModel.getUser(userData);
  if (!response) {
    res.status(200).send({ message: "Invalid Credentials" })
    return;
  }
  const { _id: userId } = response;
  jwt.sign({ userId }, process.env.SECRET, (err, token) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.cookie("userToken", token);
    res.send({ userToken: token });
  });
}

module.exports = app;