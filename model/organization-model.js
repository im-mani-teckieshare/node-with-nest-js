const db = require('../database');
const app = {};

app.bulkInsert = (organization) => {
  return new Promise((resolve) => {
    const connection = db.conn();
    let statement = `INSERT INTO organizations(id,name, address, country, zipcode)  VALUES ?`;
    connection.query(statement, [organization], (err, results) => {
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