const db = require('../database');
const app = {};

app.upsertMapping = (mapping) => {
  return new Promise((resolve) => {
    const connection = db.conn();
    let statement = `INSERT INTO user_organzations_mapping(user_id,org_id)  VALUES ?`;
    connection.query(statement, [mapping], (err, results) => {
      if (err) {
        console.error(err.message);
        resolve({ done: false });
        return;
      }
      resolve({ done: true, affecteRows: results.affectedRows })
    });
  });
}

app.getOrganizations = (userId) => {
  return new Promise((resolve) => {
    const connection = db.conn();
    let statement = `SELECT * from organizations where id in (SELECT org_id from user_organzations_mapping where user_id = ?)`;
    connection.query(statement, userId, (err, results) => {
      if (err) {
        console.error(err.message);
        resolve({ done: false });
        return;
      }
      resolve({ done: true, results })
    });
  });
}

app.getUsers = (orgId) => {
  return new Promise((resolve) => {
    const connection = db.conn();
    let statement = `SELECT * from users where id in (SELECT user_id from  user_organzations_mapping where org_id = ?)`;
    connection.query(statement, orgId, (err, results) => {
      if (err) {
        console.error(err.message);
        resolve({ done: false });
        return;
      }
      resolve({ done: true, results })
    });
  });
}

module.exports = app;