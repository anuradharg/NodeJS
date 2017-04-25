const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe our tests
describe('Deleting record', function(){

  var char;
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      done();
    });
  });


  it('Deletes one record from the database', function(done){
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });


})
