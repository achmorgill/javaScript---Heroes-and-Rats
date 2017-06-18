var Hero = require('../hero');
var assert = require('assert');
var Food = require('../food');
var Task = require('../task');
var Rat = require('../rat');

describe('hero', function() {

  var superman;

  var sausages, fishFingers, steak, salad;
  var beans, fruit, nuts,mightyBurger;

  var task1, task2, task3;
 
  var rat;

  beforeEach( function() {
    superman = new Hero( "superman", 0, "fish fingers", "I am superman");

    sausages = new Food("sausages",10);
    fishFingers = new Food("fish fingers", 5);
    steak = new Food("steak", 20);
    salad = new Food("salad", 5);
    beans = new Food("beans", 7);
    fruit = new Food("fruit", 5);
    nuts = new Food("nuts", 10);
    mightyBurger = new Food("mightyBurger", 50);

    task1 = new Task("task1", 4, 3);
    task2 = new Task("task2", 2, 2);
    task3 = new Task("task3", 5, 5)

    rat = new Rat();
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

  it("hero can eat one food item", function() {
    superman.eat(sausages);
    assert.equal(10,superman.health);
  })

  it("hero can eat his favourite food", function(){
    superman.eat(fishFingers);
    assert.equal(7.5, superman.health);
  })

  it("hero can eat lots", function() {
    superman.eat(fishFingers);
    superman.eat(beans);
    superman.eat(steak);
    superman.eat(nuts);
    assert.equal(44.5, superman.health);
  })

  it("hero can eat contaminated food", function() {
    superman.eat(fishFingers);
    rat.touchFood(beans);
    superman.eat(beans);
    assert.equal(0.5, superman.health);
  })

  it("hero can check if food contaminated", function() {
    rat.touchFood(sausages);
    superman.eat(sausages);
 
    assert.equal(true, superman.checkFoodQuality(sausages));
  })

  it("heros health set to max 100%", function() {
    superman.eat(mightyBurger);
    superman.eat(mightyBurger);
    superman.eat(steak);
    assert.equal(100, superman.health);
    })

  it("add tasks to taskList", function() {
    superman.addTask(task1);
    assert.equal(1, superman.taskList.length);
    })
  it("add 3 tasks to taskList", function() {
    superman.addTask(task1)
    superman.addTask(task2);
    superman.addTask(task3);
    assert.equal(3,superman.taskList.length);
  })

  // it ("check no tasks are completed", function() {
  //   superman.addTask(superman.task1);
  //   superman.addTask(superman.task2);
  //   superman.addTask(superman.task3);

  //   var completeCount = superman.displayCompletedTasks(superman);
  //   assert.equal(0,completeCount);
  // })

  // it ("check all completed tasks are displayed", function() {
  //   superman.addTask(superman.task1);
  //   superman.addTask(superman.task2);
  //   superman.addTask(superman.task3);
  //   task1.setTaskComplete();
  //   task2.setTaskComplete();

  //   var completeCount = superman.displayCompletedTasks(superman);
  //   assert.equal(2,completeCount);
  // })
 
 it("order tasks by difficulty", function() {
   var orderArray = [];
   var orderKey = "difficulty";

   superman.addTask(superman.task1);
   superman.addTask(superman.task2);
   superman.addTask(superman.task3);
   
   var result = superman.orderTasks(superman.taskList,orderKey);

   assert.equal("'task 2','task 1', 'task3'",result);
 })   
  
 // it("order tasks by urgency", function() {
 //   var orderArray = [];
 //   var orderKey = "urgency";

 //   superman.addTask(superman.task1);
 //   superman.addTask(superman.task2);
 //   superman.addTask(superman.task3);
   
 //   var result = superman.orderTasks(superman.taskList,orderKey);
   
 //   assert.equal("'task 2','task 1', 'task3'",result);
 // })   

 // it("order tasks by rewardTokens", function() {
 //   var orderArray = [];
 //   var orderKey = "rewardTokens";

 //   superman.addTask(superman.task1);
 //   superman.addTask(superman.task2);
 //   superman.addTask(superman.task3);
   
 //   var result = superman.orderTasks(superman.taskList,orderKey);
   
 //   assert.equal("'task 2','task 1', 'task3'",result);
 // }) 


})