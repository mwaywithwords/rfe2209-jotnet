// Make sure to run this file from the prompt (JotNet) directory
// and not a sub-drectory.

const Post = require("./models/Post.js");
const postsData = require("../examples/postsData.json");

Post.deleteAll()
  .then(() => Promise.all(postsData.map((post) => Post.createOne(post))))
  .then(() => console.log("The database has been reset!"))
  .catch((err) => console.log("Error resetting the database: ", err));
