const Post = require('../models/Post.js');
require('dotenv').config();

exports.getPosts = (req, res) => {
  Post.findAll().then((response)=>{
    res.send(response);
  }).catch((err)=>{
    console.log(err);
  });
};

exports.findByID = (req, res) => {
  const id = req.params.id;
  Post.findByID(id).then((response)=>{
    res.send(response);
  }).catch((err)=>{
    console.log(err);
  });
};

exports.addPost = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const summary = req.body.summary;
  const status = req.body.status;
  const image_id = req.body.image_id;

  Post.createOne({title, content, summary, status, image_id});
  res.sendStatus(201);
};

exports.togglePostStatus = (req, res) => {
  const id = req.body.id;
  const status = req.body.id;
  toggleStatusByID(id, status);
  req.sendStatus(201);
};

exports.deletePost = (req, res) => {
  const auth = req.headers.authorization;
  const id = req.body.id;

  if (auth === process.env.AUTH_SECRET) {
    Post.deleteByID(id); res.sendStatus(204);
  } else {
    res.sendStatus(401);
  }
};
