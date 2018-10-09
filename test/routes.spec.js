const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('API ROUTES', () => {
  it('/api/v1/makes should return all makes', (done) => {
    chai.request(server)
      .get('/api/v1/makes')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(3);
        response.body[0].should.have.property('make_name');
        response.body[0].make_name.should.equal('ferrari');
        response.body[0].should.have.property('manufacturer');
        response.body[0].manufacturer.should.equal('ferrari');
        response.body[0].should.have.property('created_at');
        response.body[0].created_at.should.equal('2018-10-09T14:35:15.492Z');
        response.body[0].should.have.property('updated_at');
        response.body[0].updated_at.should.equal('2018-10-09T14:35:15.492Z');
        done();
      });
  });

  it('/api/v1/models should return all makes', (done) => {
    chai.request(server)
      .get('/api/v1/models')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(167);
        response.body[0].should.have.property('model_name');
        response.body[0].model_name.should.equal('458 Italia');
        response.body[0].should.have.property('body');
        response.body[0].body.should.equal('Coupe');
        response.body[0].should.have.property('engine');
        response.body[0].engine.should.equal('8');
        response.body[0].should.have.property('top_speed');
        response.body[0].should.have.property('horse_power');
        response.body[0].horse_power.should.equal(578);
        response.body[0].should.have.property('transmission');
        response.body[0].transmission.should.equal('7-speed automatic');
        response.body[0].should.have.property('make_id');
        response.body[0].created_at.should.equal('2018-10-09T14:35:15.507Z');
        response.body[0].should.have.property('updated_at');
        response.body[0].updated_at.should.equal('2018-10-09T14:35:15.507Z');
        done();
      });
  });
});

describe('CLIENTS ROUTES', () => {
  it('GET / HAPPY PATH', (done) => {
    chai.request(server)
      .get('/')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.html;
        done();
      });
  });

  it('GET / SAD PATH', (done) => {
    chai.request(server)
      .get('/SADPATH')
      .end((err, response) => {
        response.should.have.status(404);
        response.should.be.html;
        done();
      });
  });
});
