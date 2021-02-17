const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/user-route');
const orgRoutes = require('./routes/organization-route');
const loginRoutes = require('./routes/account-route');

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(loginRoutes)
app.use(auth)
app.use('/users', userRoutes);
app.use('/organizations', orgRoutes);
app.use((_, res) => {
  res.status(404).send('Route not Found');
})


module.exports = app;