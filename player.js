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

  };

  window.Blockman.Util.inherits(Player, Blockman.MovingObject);

  Player.prototype.jump = function () {
    this.vert = -50;
    this.move(0)
  };

  Player.prototype.walk = function () {
    if (this.dir === "right") {
      this.move(10)
    } else {
      this.move(-10);
    }
  };

  Player.prototype.run = function () {
    if (this.dir === "right") {
      this.move(20)
    } else {
      this.move(-20);
    }
  };

}())
