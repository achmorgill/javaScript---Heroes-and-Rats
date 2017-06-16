var Hero = require('../hero');
var assert = require('assert');
var Food = require('../food');

describe('hero', function() {

  var superman;
  var sausages;

  beforeEach( function() {
    superman = new Hero( "superman", 0, "fish fingers", "I am superman");
    sausages = new Food("sausages",10);
    fishFingers = new Food("sausages",5);
  })

  it("hero has name", function() {
    assert.equal("superman",superman.name);
  })

  it("hero has health", function() {
    assert.equal(0,superman.health);
  })

  it("hero has favourite food", function() {
    assert.equal("fish fingers",superman.favFood);
  })

  it("hero has sayName ", function() {
    assert.equal("I am superman",superman.sayName);
  })

  it("hero's taskList is empty", function() {
    assert.equal(0,superman.taskList.length);
  })

  it("hero can eat food", function() {
    superman.eat(sausages);
    assert.equal(10,superman.health);
  })

  it("hero can eat his favourite food", function(){
    superman.eat(fishFingers);
    assert.equal(7.5, superman.health);
  })



})