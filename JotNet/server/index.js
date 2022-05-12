// This module adds environment variables to
// process.env, based on values in ../.env.
// See that file for configurable values.
require("dotenv").config();

const express = require("express");
const path = require("path");
const postCtrl = require("./controllers/posts.js");
const logger = require("./middleware/logger.js");
const authChecker = require("./middleware/authChecker.js");

const app = express();
 
// TODO: Add app-wide middleware

// TODO: Set up static service of assets

// TODO: Define routes

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
