const request = require("supertest");

const server = require('./server');
const db = require("../dataBase/dbConfig");


describe("server.js", function() {
    describe("environment", function() {
      it("should set db environment to testing", function() {
        expect(process.env.DB_ENV).toBe("testing");
    });
});

  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
