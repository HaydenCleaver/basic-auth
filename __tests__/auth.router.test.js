const { sequelizeDatabase } = require('../src/auth/models/users-model');
const supertest = require('supertest');
const server = require('../src/server');
const mockRequest = supertest(server);

beforeAll (async () => {
  await sequelizeDatabase.sync();
});

afterAll (async () => {
  await sequelizeDatabase.drop();
  await sequelizeDatabase.close();
});

describe('Auth Tests', () => {
  test('allow user to signup', async () => {
    let response = await mockRequest.post('/signup').send({
      username: 'user',
      password: 'pass',
    });

    console.log('Response Body', response.body);
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('user');
    expect(response.body.password).toBeTruthy();
    expect(response.body.password).not.toEqual('pass');
  });

});
