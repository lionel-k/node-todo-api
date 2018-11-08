const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});


const todo1 = new Todo({
  text: 'Finish Node course'
});

const todo2 = new Todo({
  text: 'Do sport',
});

const todo3 = new Todo({
  text: 'Drink tea',
  completed: true,
  completedAt: 12345
});

todo1.save().then((doc) => {
  console.log('Saved todo', todo1)
}, (e) => {
  console.log('Unable to save todo', e)
});

todo2.save();
todo3.save();

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

const user1 = new User({
  name: 'Lio',
  age: 28,
  email: 'lio@yopmail.com'
});

const user2 = new User({
  name: 'Val',
  email: 'val@yopmail.com'
});

user1.save().then((doc) => {
  console.log('Saved user', user1);
}, (e) => {
  console.log('Unable to save user', e)
});

user2.save();
