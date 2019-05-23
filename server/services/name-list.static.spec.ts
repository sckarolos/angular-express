import { app } from '../app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('GET /api/name-list/static', () => {
  it('should return response on call', () => {
    return chai.request(app).get('/api/name-list/static')
      .then(res => {
        chai.expect(res.text).to.eql([]);
      });
  });
});