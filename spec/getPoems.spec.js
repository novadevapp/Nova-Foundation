const mongoose = require("mongoose");
const request = require("supertest");

const buildDummy = require("../src/database/config/buildTestDB/index");
// const selectPoems = require("../src/database/queries/selectPoems");
const users = require("../src/database/models/users");
const { create } = require("../src/utils/cookie");
const app = require("../src/app");

describe("initial test", () => {
  let user;
  let jwt;
  // Before all tests, connect mongoose to mongodb
  beforeAll(async done => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2500000;
    await buildDummy();
    user = await users.findOne({ username: "Sarah" }, "_id");
    jwt = await create({ id: user._id, username: "Sarah" });
    done();
  });
  // Before each test, rebuildDb
  it("make request for get poems", done => {
    request(app)
      .get('/api/v1/poems')
      .set('Cookie', `jwt=${jwt}`)
      .expect(200)
      .end((err, res) => {
        if (err)
          done(err)
        else {
          expect(res.body.data[0].title).toEqual('My First Child')
          done()
        }
      })
  });

  // After all tests, disconnect mongoose connection
  afterAll(() => mongoose.disconnect());
  
});
