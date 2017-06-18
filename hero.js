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
        if(food.contaminated) {
          this.health -= food.replenishmentValue;
        }else {
          this.health += food.replenishmentValue;
        }
      }
      else 
      {
        if(food.contaminated) {
          this.health -= food.replenishmentValue *1.5;
        }else {
          this.health += food.replenishmentValue * 1.5
        }

      }
      if (this.health > 100) {this.health = 100}
        if (this.health < 0) {this.health = 0}
      },

    addTask: function(task) {
      this.taskList.push(task);
    },

    orderTasks: function(taskList,key) {
      var sortedTasks = [];
      var sortkey = this.rewardTokens;

      console.log("tasklist", this.taskList);
      // this.taskList.sort('key');
      _.sortBy(this.taskList, 'key');
      console.log("sorted array",this.taskList);

      return this.taskList;

    }.bind(this),

    displayCompletedTasks: function(taskList) {
      var count = 0;
      var completedTasks = [];

      for (var i=0; i<this.taskList.length; i++)
      {
        console.log("i, task", i,this.taskList[i].taskComplete)
        if (this.taskList[i].taskComplete) {
          completedTasks[i] = this.taskList[i];
          count++;
        }
      }
      console.log("count", count);
      console.log("completedtask",completedTasks.length)
      return completedTasks.length;
    }.bind(this),

    checkFoodQuality: function(sausages) {
      return sausages.contaminated;
    }

  }
}

module.exports = Hero;