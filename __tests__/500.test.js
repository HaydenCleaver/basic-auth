'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/auth/models/users-model');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('API Server', () => {
  test('handles errors', async () => {
    const response = await request.get('/signup');
    expect(response.status).toEqual(500);
  });
});

