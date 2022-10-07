'use strict';

module.exports = (req, res, next) => {
  res.status(404).send({
    error: 404,
    route: req.orignalUrl,
    message: 'Not Found',
  });
};

