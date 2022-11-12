const db = require('../db.js');

exports.createOne = ({ title, content, summary, status, image_id }) => {

  var sql = 'INSERT INTO posts (title, content, summary, status, image) VALUES (?,?,?,?,?)';
  return new Promise((resolve, reject)=>{
    db.queryAsync(sql, [title, content, summary, status, image_id], ( err, data
    ) => {
      if (err) {
        return reject('error in createOne', err);
      }
      return resolve(data);
    });
  });
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
};

exports.findByID = (id) => {

  return new Promise((resolve, reject)=>{
    db.queryAsync(`SELECT * FROM posts WHERE ID= ${id}`, (err, data)=>{
      if (err) {
        reject(err, 'from findby ID method in Post');
      } else {
        resolve(data);
      }
    });
  });
};

exports.incrementViewByID = (id, views) => {

  return new Promise((resolve, reject)=>{
    db.queryAsync(`UPDATE posts SET views = ${views}  WHERE ID= ${id}`, (err, data)=>{
      if (err) {
        reject(err, 'from findby ID method in Post');
      } else {
        resolve(data);
      }
    });
  });
};

exports.toggleStatusByID = (id, status) => {
  return new Promise((resolve, reject)=>{
    db.queryAsync(`UPDATE posts SET status = ${status}  WHERE ID= ${id}`, (err, data)=>{
      if (err) {
        reject(err, 'from toggleStatusByID method in Post');
      } else {
        resolve(data);
      }
    });
  });
};

exports.deleteByID = (id) => {

  return db.queryAsync(`DELETE from posts where ID = ${id}`).catch((err) => console.log(err));
};

exports.deleteAll = () => {
  return db.queryAsync('TRUNCATE posts').catch((err) => console.log(err));
};
