const mongoose = require("mongoose");
const request = require("supertest");

const insertUser = require("../src/database/queries/insertUser");
const buildTestDB = require("../src/database/config/buildTestDB");
const app = require("../src/app");

describe("Signup route", () => {
  beforeAll(async done => {
    try {
      await buildTestDB();
      done();
    } catch (error) {
      done(error);
    }
  });

  // Test Query
  it("Insert User Query", async done => {
    try {
      const user = {
        username: "Sozan Halabi",
        displayName: "Sozan",
        babyName: "leen",
        password: "1234567",
        email: "suzan@gmail.com"
      };
      const insertedUser = await insertUser(
        user.username,
        user.displayName,
        user.babyName,
        user.email,
        user.password
      );
      expect(insertedUser).toBeDefined();
      expect(insertedUser.username).toEqual("Sozan Halabi");
      done();
    } catch (error) {
      done(error);
    }
  });

  // Success Case
  it("Send Request to Signup route: Success Case", done => {
    const requestBody = {
      name: "Lillie",
      nickName: "Kitty's Mom",
      email: "lillie@gmail.com",
      password: "123456",
      babyName: "Kitty"
    };
    request(app)
      .post("/api/v1/register")
      .send({ data: requestBody })
      .expect(200)
      .expect("content-type", /json/)
      .end((error, res) => {
        if (error) done(error);
        expect(res.body.data).toBeDefined();
        expect(res.body.data.message).toEqual("Success");
        expect(res.header["set-cookie"]).toBeDefined();
        done();
      });
  });

  it("Send Request to Signup route: Failure, Email Aleady Exists", done => {
    const requestBody = {
      name: "Kareem",
      nickName: "Will's Dad",
      email: "william@gmail.com",
      password: "123456",
      babyName: "Will"
    };
    request(app)
      .post("/api/v1/register")
      .send({ data: requestBody })
      .expect(401)
      .expect("content-type", /json/)
      .end((error, res) => {
        if (error) done(error);
        expect(res.body.data).toBeFalsy();
        expect(res.body.error).toBeDefined();
        expect(res.body.error).toEqual("Email Already Exists");
        done();
      });
  });

  it("Send Request to Signup route", done => {
    const requestBody = {
      name: "UserName",
      nickName: "Baby Dad",
      email: "exmple@gmail.com",
      password: "123",
      babyName: "Baby"
    };
    request(app)
      .post("/api/v1/register")
      .send({ data: requestBody })
      .expect(422)
      .expect("content-type", /json/)
      .end((error, res) => {
        if (error) done(error);
        expect(res.body.data).toBeNull();
        expect(res.body.error).toBeDefined();
        expect(res.body.error).toEqual("Validation Error");
        done();
      });
  });

  afterAll(async done => {
    mongoose.disconnect();
  });
});
