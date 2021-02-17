const Joi = require('joi');
const orgModel = require('../model/organization-model');
const userOrgModel = require('../model/user-org-model');
const app = {};

const schema = Joi.object({
  name: Joi.any().required(),
  address: Joi.any(),
  country: Joi.string(),
  zipCode: Joi.any()
})

app.creatOrganization = (req, res) => {
  const user = req.body;
  schema.validateAsync(user).then(async () => {
    const response = orgModel.bulkInsert(user);
    res.send(response);
  });
}

app.getUsers = async (req, res) => {
  const { orgId } = req.params;
  const response = userOrgModel.getUsers(orgId)
  res.send(response);
}

app.mapUser = async (req, res) => {
  const mapping = req.body;
  const response = userOrgModel.upsertMapping(mapping)
  res.send(response);
}

module.exports = app;