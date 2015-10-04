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

    this.baseJump = this.botR[1];

  };

  window.Blockman.Util.inherits(Player, Blockman.MovingObject);

  Player.prototype.jump = function () {
    // RESET THE BASE JUMP PROP WHEN YOU LAND ON A BLOCK OBJECT, TBI
    if (this.baseJump < this.botL[1] + 150) {
      console.log(this.botL);
      this.vert = -50;
      this.move(0)
    }
  };

  Player.prototype.walk = function () {
    if (this.dir === "right") {
      this.move(15)
    } else {
      this.move(-15);
    }
  };

  Player.prototype.run = function () {
    if (this.dir === "right") {
      this.move(25)
    } else {
      this.move(-25);
    }
  };

  Player.prototype.idle = function () {
    this.move(0);
  };



}())
