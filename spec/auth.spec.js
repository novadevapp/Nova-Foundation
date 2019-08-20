const mongoose = require("mongoose");
const request = require("supertest");

const User = require("../src/database/models/users");
const { create } = require("../src/utils/cookie");
const buildTestDB = require("../src/database/config/buildTestDB/index");
const app = require("../src/app");

describe("Testing '/api/v1/login-status'", () => {
  let validCookie;
  let invalidCookie =
    "eyJhbGciOiJIUiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNTdmOThmNjE4ZjE2NDRmNzIxNDliOSIsInVzZXJuYW1lIjoiU2FyYWgiLCJpYXQiOjE1NjYwNDY2MDl9._H5PjgHugpf-Cjc4akjgB4gSvjtzO1IM0-G0wocM8NI";

  beforeAll(async done => {
    await buildTestDB();
    //Create Valid Cookie
    const user = await User.findOne({ username: "Sarah" });
    validCookie = await create({ username: user.username, id: user._id });
    done();
  });

  it("Test Authentication route: No Cookie", done => {
    request(app)
      .get("/api/v1/login-status")
      .expect(401)
      .expect("content-type", /json/)
      .end((error, response) => {
        expect(response.body.auth).toBeDefined();
        expect(response.body.auth).toBeFalsy();
        done();
      });
  });

  it("Test Authentication route: Invalid Cookie", done => {
    request(app)
      .get("/api/v1/login-status")
      .set("Cookie", [`jwt=${invalidCookie}`])
      .expect(401)
      .expect("content-type", /json/)
      .end((error, response) => {
        expect(response.body.auth).toBeDefined();
        expect(response.body.auth).toBeFalsy();
        done();
      });
  });

  it("Test Authentication route: valid Cookie", done => {
    request(app)
      .get("/api/v1/login-status")
      .set("Cookie", [`jwt=${validCookie}`])
      .expect(401)
      .expect("content-type", /json/)
      .end((error, response) => {
        expect(response.body.auth).toBeDefined();
        expect(response.body.auth).toEqual("ok");
        done();
      });
  });

  afterAll(async done => {
    mongoose.disconnect();
    done();
  });
});
