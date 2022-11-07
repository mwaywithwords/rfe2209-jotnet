const Post = require('../models/Post.js');

exports.getPosts = (req, res) => {
  Post.findAll().then((response)=>{
    res.send(response)
  }).catch((err)=>{
    console.log(err)
  });

  // TODO: Implement this route handler
  // res.sendStatus(501);
};

exports.getPost = (req, res) => {

  // TODO: Implement this route handler
  // res.sendStatus(501);
};

exports.addPost = (req, res) => {

  // TODO: Implement this route handler
  // res.sendStatus(501);
};

exports.togglePostStatus = (req, res) => {

  // TODO: Implement this route handler
  // res.sendStatus(501);
};

exports.deletePost = (req, res) => {

  // TODO: Implement this route handler
  // res.sendStatus(501);
};
