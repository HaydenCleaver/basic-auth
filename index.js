'use strict';

let { start } = require('./src/server');
let { sequelizeDatabase } = require('./src/auth/models/users-model');

sequelizeDatabase.sync()
  .then(() => {
    console.log('successful connection');
    start();
  }).catch(e => {
    console.error('Could not start server', e.message);
  });
