var assert = require ('assert');
var Food = require ('../food');

describe('food', function() {

  var sausages;

  beforeEach( function() {
    sausages = new Food("sausages",10);
  })

it("Food has name", function() {
  assert.equal("sausages", sausages.name);
})

it("Food has replenishment value", function() {
  assert.equal(10,sausages.replenishmentValue);
})

})

