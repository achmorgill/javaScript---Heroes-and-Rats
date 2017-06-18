var assert = require ('assert');
var Food = require ('../food');
var Rat = require ('../rat');

describe ('rat', function(){  
  var rat;
  var sausages;

  beforeEach(function(){
    sausages = new Food("sausages",10);
    rat = new Rat();
  })

  it("rat can touch food - check food contaminated", function() {

    rat.touchFood(sausages);
    assert.equal(true,sausages.contaminated);
  })

})