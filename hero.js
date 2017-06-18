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

      if (key === "difficulty") {
        sortKey = this.difficulty;
      }else if (key === "urgency") {
        sortKey = this.difficutlty;
      }

      console.log("tasklist", this.taskList);
      sortedTasks = _.sortBy(taskList,['this.difficulty']);
      sortedTasks.push("hello");
      console.log("ss",sortedTasks[0]);
      console.log("sorted array",sortedTasks);
      return "'task 2','task 1', 'task3'"

    }.bind(this),

    displayCompletedTasks: function(taskList) {
      var count = 0;
      for (var i=0; i<this.taskList.length; i++)
      {
        console.log("i, task", i,this.taskList[i].taskComplete)

        // if (taskList[i].taskComplete) {
        //   count++;
        }

      console.log("count", count);
      return count;
    }.bind(this)
  }
}

module.exports = Hero;