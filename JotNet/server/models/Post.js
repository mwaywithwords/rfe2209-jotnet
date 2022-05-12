const db = require("../db.js");

exports.createOne = ({ title, content, summary, status, image_id }) => {
 
  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch 
  // to a callback-based implementation.
  throw Error("Method not implemented")
};

exports.findAll = () => {
 
  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch 
  // to a callback-based implementation.
  throw Error("Method not implemented")
};

exports.findByID = (id) => {
 
  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch 
  // to a callback-based implementation.
  throw Error("Method not implemented")
};

exports.incrementViewByID = (id) => {
 
  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch 
  // to a callback-based implementation.
  throw Error("Method not implemented")
};

exports.toggleStatusByID = (id) => {
 
  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch 
  // to a callback-based implementation.
  throw Error("Method not implemented")
};

exports.deleteByID = (id) => {
 
  // TODO: Implement this method.
  // Update the function's arguments if you'd like to switch 
  // to a callback-based implementation.
  throw Error("Method not implemented")
};

exports.deleteAll = () => {
  return db.queryAsync(`TRUNCATE posts`).catch((err) => console.log(err));
};
