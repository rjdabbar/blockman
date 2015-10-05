(function () {
  window.Blockman = window.Blockman || {};

  var MovingObject = Blockman.MovingObject = function (argsObj) {
    this.botL = argsObj.botL;
    this.botR = argsObj.botR;
    this.height = argsObj.height;
    this.dir = argsObj.dir;
    this.game = argsObj.game;
    this.color = argsObj.color;
    this.speed = argsObj.speed;
    this.vert = argsObj.vert;
  };

  MovingObject.prototype.draw = function (ctx, xView, yView) {
    ctx.fillStyle = this.color;
    ctx.moveTo(this.botL[0] - xView, this.botL[1] - yView);
    ctx.lineTo(this.botL[0] - xView, this.botL[1] - yView - this.height);
    ctx.lineTo(this.botR[0] - xView, this.botR[1] - yView - this.height);
    ctx.lineTo(this.botR[0] - xView, this.botR[1] - yView);
    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    var oldBotR, oldBotL, newBotR, newBotL
    oldBotR = this.botR;
    oldBotL = this.botL;
    newBotR = [oldBotR[0] + this.speed, oldBotR[1] + this.vert];
    newBotL = [oldBotL[0] + this.speed, oldBotL[1] + this.vert];
    this.botR = newBotR;
    this.botL = newBotL;
    this.keepUpAboveGround();
    this.capSpeed();
  };

  MovingObject.prototype.applyGravity = function () {
    if (this.botL[1] > this.game.groundLevel || this.botL[1] < this.game.groundLevel) {
      this.vert -= this.game.gravity
    }
  };

  MovingObject.prototype.applyFriction = function () {
    if (this instanceof Blockman.Player) {
      if (this.speed > 0) {
        this.speed -= 0.5;
      } else if (this.speed < 0) {
        this.speed += 0.5;
      };
    };
    this.zeroSpeed();

  };

  MovingObject.prototype.keepUpAboveGround = function () {
    if (this.botL[1] > this.game.groundLevel || this.botR[1] > this.game.groundLevel) {
      this.botL[1] = this.game.groundLevel;
      this.botR[1] = this.game.groundLevel;
    }
  };

  MovingObject.prototype.capSpeed = function () {
    if (this.speed > 20) {
      this.speed = 20;
    } else if (this.speed < -20) {
      this.speed = -20;
    }
  };

  MovingObject.prototype.zeroSpeed = function () {
    if (this.speed < 0.4 && this.speed > -0.4) {
      this.speed = 0;
    };
  };

}())
