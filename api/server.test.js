const supertest = require('supertest')
const server = require('./server')

// test welcome message
test('main route', async () => {
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
})