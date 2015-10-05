(function () {
  window.Blockman = window.Blockman || {};

  var World = Blockman.World = function (argsObj) {
    this.game = argsObj.game;
    this.ground = Blockman.Generator.generateGround(this.game);
    this.numBlocks = argsObj.numBlocks;
    this.numGaps = argsObj.numGaps;
  };

  World.prototype.fillWorld = function () {

  };

  World.prototype.draw = function (ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.ground.x1, this.ground.y1, this.ground.width, this.ground.height)
  };


}())
