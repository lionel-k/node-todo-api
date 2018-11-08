const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// const todo1 = new Todo({
//   text: 'Finish Node course'
// });

// const todo2 = new Todo({
//   text: 'Do sport',
// });

// const todo3 = new Todo({
//   text: 'Drink tea',
//   completed: true,
//   completedAt: 12345
// });

// todo1.save().then((doc) => {
//   console.log('Saved todo', todo1)
// }, (e) => {
//   console.log('Unable to save todo', e)
// });

// todo2.save();
// todo3.save();

// const user1 = new User({
//   name: 'Lio',
//   age: 28,
//   email: 'lio@yopmail.com'
// });

// const user2 = new User({
//   name: 'Val',
//   email: 'val@yopmail.com'
// });

// user1.save().then((doc) => {
//   console.log('Saved user', user1);
// }, (e) => {
//   console.log('Unable to save user', e)
// });

// user2.save();
