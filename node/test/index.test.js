import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index.js';

chai.use(chaiHttp);
const should = chai.should(); // eslint-disable-line no-unused-vars

describe('Express Server Demo', () => {
  it('should return Welcome message', (done) => {
    chai.request(server).get('/').end((err, res) => {
      console.log(res.header);
      console.log('---');
      console.log(res.body);
      res.should.have.status(200);
      res.should.have.header('content-type', 'application/json; charset=utf-8');
      res.body.should.be.a('object');
      res.body.should.have.property('message').
          equals('Hello to Express Server Demo');
      done();
    });
  });
});
