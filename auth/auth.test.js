const db = require('../database/dbConfig');
const request = require('supertest');
const server = require('../api/server')
const auth_Model = require("./auth-model");

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

// test register
test('post to /api/auth/register', async () => {
  const res = await auth_Model.add({
    username: "Claude",
    password: "123",
  })
  const users = await db('users')
  expect(users).toHaveLength(4)
})

test('post to /api/auth/register', async () => {
  const res = await auth_Model.add({
    username: "Math",
    password: "123",
  })
  expect(res.username).toBe("Math")
})


// test login
describe('auth-router.js', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('post to /api/auth/login', () => {
    it('responds with 200 OK', async done => {
      await request(server)
      request(server)
        .post('/api/auth/login')
        .send({ username: 'Jean', password: '123' })
        .expect(200);

      done();
    });

    it('responds with json', async done => {
      await request(server)
      request(server)
        .post('/api/auth/login')
        .send({ username: 'Jean', password: '123' })
        .expect('Content-Type', /json/i);

      done();
    });
  });
});