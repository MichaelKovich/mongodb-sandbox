const mongoose = require('mongoose');

// Schema is a way for us to define the way the data is going to come in.

const userSchema = new mongoose.Schema({
  // name: String
  name: {
    type: String,
    required: true,
    default: 'John Doe',
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 150,
  },
  isLame: Boolean,
  favoriteFood: {
    type: String,
    enum: ['Bacon', 'Pizza', 'Ice Cream', 'Cereal'],
  },
});

// Takes in a name and a schema
// We'll interact with all user data through the user model.
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
