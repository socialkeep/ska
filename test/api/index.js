const request = require('supertest');
const app = require('../../src/server/server');

/**
 *  Testing GET content endpoints
 */
describe('GET /pending', function(){
  it('Respond with an array of objects containing a list of all pending posts.', function(done){
    request(app)
      .get('/pending')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/**
 *  Testing POST content endpoint
 */




/**
 *  Testing POST admin login endpoint
 */



