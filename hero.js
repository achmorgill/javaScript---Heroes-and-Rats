var _ = require ('lodash');

var Hero = function( name, health, favFood, sayName) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.sayName = sayName;
  this.taskList = [];


  Hero.prototype =  {

    eat: function(food) {
      if (food.name != this.favFood) {
        this.health = food.replenishmentValue;
      }else {
        this.health = food.replenishmentValue;
      }
    }
  }

}

module.exports = Hero;