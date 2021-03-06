const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');


const todos = [{
  _id: new ObjectID(),
  text: 'first todo'
},{
  _id: new ObjectID(),
  text: 'second todo'
}]

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should not create a todo', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find({}).then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});


describe('GET /todos/:id', () => {
  it('should return todo doc', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('should return 404 if todo not found', (done) => {
    request(app)
    .get('/todos/123')
    .expect(404)
    .expect((res) => {

    })
    .end(done);
  });

  it('should return 404 if non object id', (done) => {
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}123`)
    .expect(404)
    .expect((res) => {

    })
    .end(done);
  });

});
