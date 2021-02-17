
const jwt = require('jsonwebtoken');
require('dotenv').config();
function auth(req, res, next) {
  let token = req.headers['authorization'] || req.cookies['userToken'] || ''
  token = token.replace('Bearer ', '');
  jwt.verify(token, process.env.SECRET, function (err, payload) {
    if (err) {
      res.status(403).send('Invalid Access');
      return;
    }
    req.user = payload;
    next();

  });

}

module.exports = auth;