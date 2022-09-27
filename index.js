'use strict';

let { start, sequelize} = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('successful connection');
    start();
  }).catch(e => {
    console.error('Could not start server', e.message);
  });
