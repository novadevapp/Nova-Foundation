const mongoose = require('mongoose');
const request = require('supertest');

const { create } = require('../src/utils/cookie')
const User = require('../src/database/models/users');
const insertPoem = require('../src/database/queries/insertPoem');
const buildTestDB = require('../src/database/config/buildTestDB');
const app = require('../src/app');

describe('Post Poems route', () => {
  let userId;
  let validCookie;
  beforeAll(async (done) => {
    try {
      await buildTestDB();
      const user = await User.findOne({ username: 'Sarah' });
      validCookie = await create({ username: user.username, id: user._id });
      done();
    } catch (error) {
      done(error)
    }
  });

  // Test Insert Poem Query
  it('Insert Poem Query', async (done) => {
    try {
      const poem = {
        title: 'poem title',
        content: 'poem content',
      }
      userId = await User.findOne({ username: "Sarah" }, "_id");
      const insertedPoem = await insertPoem({ ...poem, _id: userId._id });
      expect(insertedPoem).toBeDefined();
      expect(insertedPoem.title).toEqual('poem title');
      done();
    } catch (error) {
      done(error);
    }
  });

  // Success Case
  it('Send Request to Post Poems route: Success Case', (done) => {
    const requestBody = {
      title: 'title',
      poem: 'content',
    }
    request(app)
      .post('/api/v1/poems')
      .set('Cookie', [`jwt=${validCookie}`])
      .send({ data: requestBody })
      .expect(200)
      .expect('content-type', /json/)
      .end((error, res) => {
        if (error) done(error);
        expect(res.body.data).toBeDefined();
        expect(res.body.data.message).toEqual('Success');
        done();
      });
  })

  it('Send Request to Signup route. Validation Error', (done) => {
    const requestBody = {
      title: '',
      content: 'content',
    }
    request(app)
      .post('/api/v1/poems')
      .send({ data: requestBody })
      .set('Cookie', [`jwt=${validCookie}`])
      .expect(401)
      .expect('content-type', /json/)
      .end((error, res) => {
        if (error) done(error);
        expect(res.body.data).toBeFalsy();
        expect(res.body.error).toBeDefined();
        expect(res.body.error).toEqual('Validation Error');
        done();
      });
  })

  afterAll(async (done) => {
    mongoose.disconnect();
    done();
  });

})
