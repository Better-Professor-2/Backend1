const server = require("../api/server");
const request = require("supertest");
const db = require("../database/dbConfig.js");

describe("deadlines router", () => {
    it("should return status 401 without auth", async () => {
      const res = await request(server).get("/api/deadliness");
  
      expect(res.status).toBe(401);
    });
  
    it("should be a json response", async () => {
      const res = await request(server).get("/api/deadlines");
  
      expect(res.type).toBe("application/json");
    });
  });

  describe("POST /deadlines", function () {
    beforeEach(async () => {
      await db("deadlines").truncate(); 
    });

    it("return 201 on success", function () {
      return request(server)
        .post("/deadlines")
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it('should return a message saying "Created deadline successfully"', function () {
      return request(server)
        .post("/deadlines")
        .then(res => {
          expect(res.body.message).toBe("Created deadline successfully");
        });
    })
    it("add the deadlineData to the db", async function () {
      const deadlineData1 = {id : 1, course_title: 'zoology', description: 'compulsory', due_date: '10-12-2020', student_id: 10}
      const deadlineData2 = {id : 2, course_title: 'botany', description: 'elective', due_date: '15-12-2020', student_id: 9}
      await db("deadlines").insert(deadlineData1);
      await db("deadlines").insert(deadlineData2);
      
      const existing = await db("deadlines").where({ name: deadlineData });
      expect(existing).toHaveLength(0);

      await request(server)
        .post("/deadlines")
        .send({ name: "deadlineData1" })
        .then(res => {
          expect(res.body.message).toBe('Deadline created successfully")
        });
      await request(server)
        .post("/deadlines")
        .send({ name: "deadlineData "})
        .then(res => {
          expect(res.body.message).toBe("Deadline created successfully");
        });

      const inserted = await db("deadlines"); 
      expect(inserted).toHaveLength(2);
    });
  });
