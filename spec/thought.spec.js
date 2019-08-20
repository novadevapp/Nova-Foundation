const mongoose = require("mongoose");

const insertthought = require("../src/database/queries/insertThoughts");
const buildTestDB = require("../src/database/config/buildTestDB");
const User = require("../src/database/models/users");

describe("insert thought", () => {
  beforeAll(async done => {
    try {
      await buildTestDB();
      done();
    } catch (error) {
      done(error);
    }
  });

  // Test Query
  it("Insert thought Query", async done => {
    try {
      const ThoughtTwo = {
        emoji: "happy",
        thought: "It isn't raining"
      };
      const user = await User.findOne({ username: "Sarah" });

      const insertTest = await insertthought(
        user._id,
        ThoughtTwo.emoji,
        ThoughtTwo.thought
      );
      expect(insertTest).toBeDefined();
      expect(insertTest.emoji).toEqual("happy");
      done();
    } catch (error) {
      done(error);
    }
  });

  afterAll(async done => {
    mongoose.disconnect();
  });
});
