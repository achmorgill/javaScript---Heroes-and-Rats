var _ = require ('lodash');

var Task = function( action, difficulty, urgency, taskComplete ){
  this.action = action;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.rewardTokens = this.difficulty + this.urgency;
  this.taskComplete = false;

  Task.prototype = {
    getRewardTokens: function(task) {
      this.rewardTokens = task.difficulty + task.urgency;
    },

    setTaskComplete: function() {
  
        this.taskComplete = true;
        return this.taskComplete;
    },

  }

}

  module.exports = Task;