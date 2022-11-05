require("dotenv").config({path:"../.env"});
const mysql = require("mysql2");
const Promise = require("bluebird");

// It's not a good idea to hardcode connection credentials here.
// Configure process.env variables in ../.env and use them
// in your connection code: e.g. process.env.DB_NAME

// TODO: Set up a connection to the "jotnet" MySQL database
const connection = mysql.createConnection({host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASS, database: process.env.DB_NAME,});


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
        ID INT primary key auto_increment,
        title VARCHAR(255),
        content TEXT,
        summary VARCHAR(400),
        status varchar(255),
        image VARCHAR(255),
        views INT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP ,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )`
    );
  })
  .catch((err) => console.log(err));

module.exports = db;
