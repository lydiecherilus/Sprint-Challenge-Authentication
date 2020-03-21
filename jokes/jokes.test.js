const request = require('supertest');
const server = require('../api/server')

describe('get to /api/jokes', () => {
    it('responds with json type', async done => {
        const res = await request(server).get('/api/jokes');
        expect(res.type).toBe('application/json')
        done();
    });
});