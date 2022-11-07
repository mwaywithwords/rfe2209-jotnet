const db = require('../db.js');

exports.createOne = ({ title, content, summary, status, image_id }) => {
  var sql = 'INSERT INTO posts (title, content, summary, status, image) VALUES (?,?,?,?,?)';


  return new Promise((resolve, reject)=>{
    db.queryAsync(sql, [title, content, summary, status, image_id], ( err, data
    ) => {
      if (err) {
        return reject('some error happened', err);
      }
      return resolve(data);
    });
  });


  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch
  // to a callback-based implementation.
  // throw Error("Method not implemented")
};

exports.findAll = () => {

  return new Promise((resolve, reject)=>{
    db.queryAsync('SELECT * FROM posts ORDER BY id DESC', (err, data)=>{
      if (err) {
        reject(err, 'from find all method in Post');
      } else {
        resolve(data);
      }
    });
  });


  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch
  // to a callback-based implementation.
  // throw Error("Method not implemented")
};

exports.findByID = (id) => {

  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch
  // to a callback-based implementation.
  // throw Error("Method not implemented")
};

exports.incrementViewByID = (id) => {

  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch
  // to a callback-based implementation.
  // throw Error("Method not implemented")
};

exports.toggleStatusByID = (id) => {

  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch
  // to a callback-based implementation.
  // throw Error("Method not implemented")
};

exports.deleteByID = (id) => {

  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch
  // to a callback-based implementation.
  // throw Error("Method not implemented")
};

exports.deleteAll = () => {
  return db.queryAsync('TRUNCATE posts').catch((err) => console.log(err));
};
