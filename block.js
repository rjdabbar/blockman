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
    this.drawPoints = [];
    this.populateDrawPoints();
  };

  Block.prototype.populateDrawPoints = function () {
    var topL, topR, botR, botL;
    topL = this.pos;
    topR = [this.pos[0] + this.width, this.pos[1]];
    botR = [this.pos[0] +this.width, this.pos[1] - 200];
    botL = [this.pos[0], this.pos[1] + this.height];
    this.drawPoints = [topL, topR, botR, botL];
  };


  Block.prototype.draw = function (ctx, xView, yView) {
    ctx.fillStyle = "#FF00FF";
    ctx.fillRect(this.pos[0] - xView, this.pos[1], this.width, -this.height)
  };

  Block.prototype.updatePos = function () {
  };

}())
