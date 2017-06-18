var assert = require('assert');
var Task = require('../task');

describe( 'task', function() {

  var task1;

  beforeEach( function() {
    task1 = new Task("saving a person",5, 3);
  })

  it("task has an action", function() {
    assert.equal("saving a person", task1.action);
  })

  it("task has difficulty level", function(){
    assert.equal(5,task1.difficulty);
  })

  it("task has urgency level", function(){
    assert.equal(3,task1.urgency);
  })

  it("calculate the rewardToken won", function() {
    task1.getRewardTokens(task1);
    assert.equal(8,task1.rewardTokens);
  })

  it("check task is complete", function() {
    assert.equal(true, task1.setTaskComplete());
  })

  






})