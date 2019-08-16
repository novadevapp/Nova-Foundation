const mongoose = require("mongoose");

const connect = require("../src/database/config/connection");
const buildDummy = require("../src/database/config/buildTestDB/index");

describe("initial test", () => {
  // Before all tests, connect mongoose to mongodb

  beforeAll( () => {
    connect();
  });

  // Before each test, rebuildDb
  beforeEach(() => {
    buildDummy();
  });

  it("first spec", () => {
    expect(1 + 1).toEqual(2);
  });

  // After all tests, disconnect mongoose connection
  afterAll(() => {
    mongoose.disconnect();
  });
});
