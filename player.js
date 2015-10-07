(function () {
  window.Blockman = window.Blockman || {};

  var Player = Blockman.Player = function (argsObj) {
    Blockman.MovingObject.call(this, {
      "botR": argsObj.botR,
      "botL": argsObj.botL,
      "height": argsObj.height,
      "color": argsObj.color,
      "dir": argsObj.dir,
      "game": argsObj.game,
      "speed": argsObj.speed,
      "vert": argsObj.vert,
    });

    this.updatePos();

    this.baseJump = this.botR[1];

  };

  window.Blockman.Util.inherits(Player, Blockman.MovingObject);

  Player.prototype.jump = function () {
    // RESET THE BASE JUMP PROP WHEN YOU LAND ON A BLOCK OBJECT, TBI
    if (this.baseJump < this.botL[1] + 150) {
      this.vert = -50;
      this.move()
    }
  };

  Player.prototype.walk = function () {
    if (this.dir === "right") {
      this.speed += 1;
    } else {
      this.speed -= 1;
    }
    this.move();
  };

  Player.prototype.run = function () {
    if (this.dir === "right") {
      this.speed += 2;
    } else {
      this.speed -= 2;
    }
      this.move();
  };

  Player.prototype.idle = function () {
    this.applyFriction();
    this.move();
  };

  Player.prototype.updatePos = function () {
    this.x = this.botL[0];
    this.y = this.botL[1] + this.height;

  }



}())
