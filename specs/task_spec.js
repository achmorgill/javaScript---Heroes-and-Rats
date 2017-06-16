var assert = require('assert');
var Task = require('../task');

describe( 'task', function() {

  var task1;

  beforeEach( function() {
    task1 = new Task(5, 3, 8, true);
  })

  it("task has difficulty level", function(){
    assert.equal(5,task1.difficulty);
  })

  it("task has difficulty level", function(){
    assert.equal(3,task1.urgency);
  })

  it("task has difficulty level", function(){
    assert.equal(8, task1.rewardTokens);
  })

  it("check task is complete", function() {
    assert.equal(true, task1.taskComplete);
  })







})