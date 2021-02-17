const request = require('supertest')
const app = require('../bin')
describe('Auth Endpoints', () => {
  it('should be denied the access', async () => {
    const res = await request(app)
      .get('/users/test/organizations')
      .send();
    expect(res.statusCode).toEqual(403)
  })
})