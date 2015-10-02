(function () {
  window.Blockman = window.Blockman || {};

  var MovingObject = Blockman.MovingObject = function (argsObj) {
    this.topR = argsObj.topR;
    this.botL = argsObj.botL;
    this.dir = argsObj.dir;
    this.game = argsObj.game;
    this.color = argsObj.color;
    this.speed = argsObj.speed;
    this.vert = argsObj.vert;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;

    ctx.moveTo(this.topR[0], this.topR[1]);
    ctx.lineTo(this.topR[0], this.botL[1]);
    ctx.lineTo(this.botL[0], this.botL[1]);
    ctx.lineTo(this.botL[0], this.topR[1]);
    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    var oldTopR, oldBotL, newTopR, newBotL;
    oldTopR = this.topR;
    oldBotL = this.botL;

    newTopR = [oldTopR[0] + this.speed, oldTopR[1] + this.vert];
    newBotL = [oldBotL[0] + this.speed, oldBotL[1] + this.vert];

    this.topR = newTopR;
    this.botL = newBotL;
  };

  MovingObject.prototype.applyGravity = function () {
    this.vert += this.game.gravity;
  };
}())
