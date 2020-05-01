const server = require("../api/server");
const request = require("supertest");
const db = require("../database/dbConfig.js");

beforeAll(async () => {
  await db('deadlines').truncate();
  


  await db('Projects').truncate();
});

describe('deadlines-model', () => {
  describe('insert', () => {
    it('should insert the provided deadline into the db and return it', async () => {
     await Deadlines.insert({name: "testDeadline1"});
     await Deadlines.insert({name: "testDeadline2"});

     const deadlines = await db("deadlines")
     expect(deadlines).toHavelength(2);
    });
});
});
beforeEach(async () => {
    // this function executes and clears out the table before each test


    await db('deadlines').truncate();
  });

// ./deadlines/deadlines-model.js
async function insert(deadline) {
    // the second parameter here is of other databases, SQLite returns the id by default
    const [id] = await db(deadlines).insert(deadline, 'id');
  
    return db('deadlines')
      .where({ id })
      .first();
  }

  
it('should insert the provided deadline into the db', async () => {
    let deadline = await Deadlines.insert({ name: 'deadlineData1' });
    expect(deadline.name).toBe('deadlineData1');
  
    
    deadline = await Deadlines.insert({ name: 'deadlineData2' });
    expect(deadline.name).toBe('deadlineData2');
  });
    
     