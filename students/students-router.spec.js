const server = require("../api/server");
const request = require("supertest");
const db = require("../database/dbConfig.js");

describe("students router", () => {
    it("should return status 401 without auth", async () => {
      const res = await request(server).get("/api/students");
  
      expect(res.status).toBe(401);
    });
  
    it("should be a json response", async () => {
      const res = await request(server).get("/api/students");
  
      expect(res.type).toBe("application/json");
    });
  });

  describe("POST /students", function () {
    beforeEach(async () => {
      await db("students").truncate(); // empty the table and reset the id back to 1
    });

    it("return 201 on success", function () {
      return request(server)
        .post("/students")
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it('should return a message saying "Successfully created student"', function () {
      return request(server)
        .post("/students")
        .then(res => {
          expect(res.body.message).toBe("Successfully created student ");
        });
    })
});