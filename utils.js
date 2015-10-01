(function () {
  window.Blockman = window.Blockman || {};

  var Util = window.Blockman.Util = function () {};

  Util.inherits = function(childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  Util.distance = function(object1, object2) {
    return Math.sqrt(Math.pow((object1.pos[0] - object2.pos[0]), 2) +
    Math.pow((object1.pos[1] - object2.pos[1]), 2));
  };
}())
