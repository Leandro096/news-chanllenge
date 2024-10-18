import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index.js';

const should = chai.should();

chai.use(chaiHttp);

describe('API Routes', () => {
    it('should fetch latest news articles', (done) => {
        chai.request(server)
            .get('/news')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.greaterThan(0); // Check if articles are returned
                done();
            });
    });

    it('should return user preferences', (done) => {
        chai.request(server)
            .get('/user/preferences')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('topics');
                done();
            });
    });

    it('should return 404 for invalid routes', (done) => {
        chai.request(server)
            .get('/invalid-route')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});