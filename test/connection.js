const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connect to the db before the tests run
before(function(done){
  //Connect to MongoDB
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', function(){
    console.log('MongoDB is now connected.');
    done();
  })
  .on('error', function(error){
    console.log('Connection error: ', error);
  });
})


//Drop the characters collection before each test
beforeEach(function(done){
  mongoose.connection.collections.mariochars.drop(function(){
    //console.log('Mariochars collection dropped.')
    done();
  })
})
