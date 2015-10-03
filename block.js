(function () {
  window.Blockman = window.Blockman || {};

  var Block = Blockman.Block = function (argsObj) {
    this.height = argsObj.height;
    this.width = argsObj.width;
    this.pos = argsObj.pos;
    this.color = argsObj.color;
    this.breakable = argsObj.breakable;
    this.hasItem = argsObj.hasItem;
    this.coins = argsObj.coins;
  };

  
}())
