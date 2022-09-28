'use strict';

// 3rd Party Resources
const express = require('express');
const router = require('./auth/router');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
app.use(router);

// make sure our tables are created, start up the HTTP server.

module.exports = {
  server: app,
  start: () => app.listen(3000, console.log('server running on', 3000)),
};

