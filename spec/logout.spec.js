const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../src/app");
const { create } = require("../src/utils/cookie");
const User = require("../src/database/models/users");
const connect = require("../src/database/config/connection");

describe("Testing Logout", () => {
  let validCookie;

  beforeAll(async done => {
    // Connect to the Database => No need to rebuild it here
    await connect();
    //Create Valid Cookie
    const user = await User.findOne({ username: "Sarah" });
    validCookie = await create({ username: user.username, id: user._id });
    done();
  });

  it("Sending GET request to '/api/v1/logout", done => {
    request(app)
      .get("/api/v1/logout")
      .set("Cookie", `jwt=${validCookie}`)
      .expect(200)
      .expect("content-type", /json/)
      .end((error, response) => {
        if (error) done(error);
        expect(response.body.logout).toBeDefined();
        expect(response.body.logout).toEqual(true);
        done();
      });
  });
  // After all tests, disconnect mongoose connection
  afterAll(async done => {
    mongoose.disconnect();
    done();
  });
});
