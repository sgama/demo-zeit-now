const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);
const app = '127.0.0.1:3000';
describe("Server!", () => {
  it("adds 2 numbers", done => {
    chai
      .request(app)
      .get("/src/nodejs/add.ts")
      .send({ num1: 5, num2: 5 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equals('10');
        done();
      });
  });

  it("says hello", done => {
    chai
      .request(app)
      .get("/src/nodejs/hello.ts")
      .send()
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
