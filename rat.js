var _ = require('lodash');

var Rat = function() {
}

Rat.prototype = {

  touchFood: function(food) {
    food.contaminated = true
  }
}

module.exports = Rat;