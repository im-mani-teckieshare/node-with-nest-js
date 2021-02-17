const db = require('../database');
const app = {};

app.bulkInsert = (insertArr) => {
  return new Promise((resolve) => {
    const connection = db.conn();
    let statement = `INSERT INTO users(id,name,email,address)  VALUES ?`;
    connection.query(statement, [insertArr], (err, results) => {
      if (err) {
        console.error(err.message);
        resolve({ done: false });
        return;
      }
      resolve({ done: true, affecteRows: results.affectedRows })
    });
  });
}

app.getUser = (userId) => {
  return new Promise((resolve) => {
    const connection = db.conn();
    let statement = `INSERT INTO users(id,name,email,address)  VALUES ?`;
    connection.query(statement, [insertArr], (err, results) => {
      if (err) {
        console.error(err.message);
        resolve({ done: false });
        return;
      }
      resolve({ done: true, affecteRows: results.affectedRows })
    });
  });
}

module.exports = app;