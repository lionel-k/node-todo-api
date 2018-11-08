const mongoose = require('mongoose');

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

module.exports = {User}
