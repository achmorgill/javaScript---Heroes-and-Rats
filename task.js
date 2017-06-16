var _ = require ('lodash');

var Task = function( difficulty, urgency, rewardTokens, taskComplete ){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.rewardTokens = rewardTokens;
  this.taskComplete = taskComplete;

}

module.exports = Task;