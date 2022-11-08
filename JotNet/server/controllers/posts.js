const Post = require('../models/Post.js');

exports.getPosts = (req, res) => {
  Post.findAll().then((response)=>{
    res.send(response);
  }).catch((err)=>{
    console.log(err);
  });

  // TODO: Implement this route handler
  // res.sendStatus(501);
};

exports.findByID = (req, res) => {
  const id = req.params.id;
  Post.findByID(id).then((response)=>{
    res.send(response);
  }).catch((err)=>{
    console.log(err);
  });


  // TODO: Implement this route handler
  // res.sendStatus(501);
};

exports.addPost = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const summary = req.body.summary;
  const status = req.body.status;
  const image_id = req.body.image_id;


  Post.createOne({title, content, summary, status, image_id});
  res.sendStatus(201);

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
