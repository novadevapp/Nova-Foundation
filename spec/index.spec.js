const mongoose = require("mongoose");

const buildDummy = require("../src/database/config/buildTestDB/index");

describe("initial test", () => {
  // Before each test, rebuildDb
  beforeEach(async (done) => {
    await buildDummy();
    done();
  });

  it("first spec", () => {
    expect(1 + 1).toEqual(2);
  });

  // After all tests, disconnect mongoose connection
  afterAll(() => {
    mongoose.disconnect();
  });
});
