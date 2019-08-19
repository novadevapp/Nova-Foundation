const mongoose = require("mongoose");

const insertthought = require("../src/database/queries/insertThoughts");
const connect = require("../src/database/config/connection");
const User = require("../src/database/models/users");

describe("insert thought", () => {
  beforeAll(async done => {
    try {
      await connect();
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

  afterAll(() => mongoose.disconnect());
});
