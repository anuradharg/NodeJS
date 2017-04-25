const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe our tests
describe('Nesting records', function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });

  //Create tests

  it('Creates an author with nested documents', function(done){

    var auth=new Author({
      name: 'Jane Austen',
      books: [{title: 'Pride and Prejudice', pages: 300}]
    });

    auth.save().then(function(){
      Author.findOne({name: 'Jane Austen'}).then(function(result){
        assert(result.books.length === 1);
        done();
      });
    });

  });

  it('Adds a book to an author', function(done){

        var auth=new Author({
          name: 'Jane Austen',
          books: [{title: 'Pride and Prejudice', pages: 300}]
        });

        auth.save().then(function(){
          Author.findOne({name: 'Jane Austen'}).then(function(result){
            //Add a book to the books array
            result.books.push({title: 'Emma', pages: 400});
            result.save().then(function(){
              Author.findOne({name: 'Jane Austen'}).then(function(result){
                assert(result.books.length === 2);
                done();
              });
            });
          });
        });
  });

});
