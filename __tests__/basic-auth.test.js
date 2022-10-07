'use strict';

const basicAuth = require('../src/auth/middleware/basic');
const { sequelizeDatabase, UsersModel } = require('../src/auth/models/users-model');

let user = {
  username: 'user',
  password: 'pass',
};


beforeAll (async () => {
  await sequelizeDatabase.sync();
  await UsersModel.create(user);
});

afterAll (async () => {
  await sequelizeDatabase.drop();
  await sequelizeDatabase.close();
});

describe('Basic Auth Middleware Tests', () => {

  test('test /signin route', () => {
    let req = {
      headers: {
        authorization: 'error',
      },
    };
    let res = {};
    let next = jest.fn();

    basicAuth(req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith('Not Authorized');
      });

  });
  test('passes', () => {
    let req = {
      headers: {
        authorization: 'error',
      },
    };
    let res = {};
    let next = jest.fn();

    basicAuth(req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith();
      });
  });
});
