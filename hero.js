var _ = require ('lodash');

var Hero = function( name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
}

module.exports = Hero;