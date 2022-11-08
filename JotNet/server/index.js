// This module adds environment variables to
// process.env, based on values in ../.env.
// See that file for configurable values.
require('dotenv').config();

const express = require('express');
const path = require('path');
const postCtrl = require('./controllers/posts.js');
const logger = require('./middleware/logger.js');
const authChecker = require('./middleware/authChecker.js');

const app = express();

// TODO: Add app-wide middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(logger);

// TODO: Set up static service of assets
app.use(express.static(path.join(__dirname, '../client/dist')));

// TODO: Define routes
app.get('/getPosts', postCtrl.getPosts);
app.get ("/getPosts/:id", postCtrl.findByID);
app.post('/addPost', postCtrl.addPost);


const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
