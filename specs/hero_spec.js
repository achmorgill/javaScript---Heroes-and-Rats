var Hero = require('../hero')
var assert = require('assert')

describe('hero', function() {

  var superman;

  beforeEach( function() {
    superman = new Hero( "superman", 100, "fish fingers");
  })

  it("hero has name", function() {
    assert.equal("superman",superman.name);
  })

  it("hero has health", function() {
    assert.equal(100,superman.health);
  })

  it("hero has favourite food", function() {
    assert.equal("fish fingers",superman.favFood);
  })









})