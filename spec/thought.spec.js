const mongoose = require("mongoose");

const insertthought = require("../src/database/queries/insertThoughts");
const selectThought = require("../src/database/queries/selectThoughts");
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

  // Test Query
  it("selectThought Query", async done => {
    try {
      const user1 = await User.findOne({ username: "Sarah" });
      const selectTest = await selectThought(user1._id);
      expect(selectTest).toBeDefined();
      expect(selectTest[0].emoji).toEqual("hopeful");
      done();
    } catch (error) {
      done(error);
    }
  });

  afterAll(async done => {
    mongoose.disconnect();
    done();
  });
});
