(function () {
  window.Blockman = window.Blockman || {};

  var Player = Blockman.Player = function (argsObj) {
    Blockman.MovingObject.call(this, {
      "topR": argsObj.topR,
      "botL": argsObj.botL,
      "color": argsObj.color,
      "dir": argsObj.dir,
      "game": argsObj.game,
      "speed": argsObj.speed,
      "vert": argsObj.vert,
    });

  };

  window.Blockman.Util.inherits(Player, Blockman.MovingObject);

  Player.prototype.jump = function () {
    this.vert = 50;
  }

}())
