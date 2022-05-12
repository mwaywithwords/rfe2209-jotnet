require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");

// It's not a good idea to hardcode connection credentials here.
// Configure process.env variables in ../.env and use them
// in your connection code: e.g. process.env.DB_NAME

// TODO: Set up a connection to the "jotnet" MySQL database
const connection = mysql.createConnection({});

// This will create versions of the mysql2 library functions
// that are _promisified_ and suffixed with "Async".
//
// Callback-based: `db.query(queryStr, callback)`
// Promises-based: `db.queryAsync(queryStr).then(....)`
//
// You may use non-promisified, callback-based versions of the
// functions, if desired, but may need to update function
// signatures and invocations elsewhere in the app. 
const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => {
    return db.queryAsync(
      // TODO: Add required fields
      `CREATE TABLE IF NOT EXISTS posts (
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP ,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )`
    );
  })
  .catch((err) => console.log(err));

module.exports = db;
