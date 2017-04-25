const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define the schema
const BookSchema = new Schema({
  title: String,
  pages: Number
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});


//Create Model. Define the collection in MongoDB and the associated Schema
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
