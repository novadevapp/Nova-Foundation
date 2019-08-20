const mongoose = require("mongoose");
const buildDB = require("../src/database/config/buildTestDB/index");

describe("initial test", () => {
  // Before each test, rebuildDb
  beforeEach(async (done) => {
    await buildDB();
    done();
  });

  it("first spec", () => {
    expect(1 + 1).toEqual(2);
  });

  // After all tests, disconnect mongoose connection
  afterAll(() => mongoose.disconnect());
  
});
