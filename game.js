(function () {
  window.Blockman = window.Blockman || {};

  var Game = Blockman.Game = function () {
    this.DIM_X = $(window).width();
    this.DIM_Y = $(window).height();


    this.enemies;
    this.player;
    this.blocks;
    this.allObjects = this.getAllObjects();
    this.lives;
    this.score;
    this.gravity = -10;

  };

  Game.prototype.getAllObjects = function () {
    var allObjects;
    return allObjects;
  };

  Game.prototype.draw = function (ctx) {
    ctx.canvas.width = this.DIM_X;
    ctx.canvas.height = this.DIM_Y;
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.getAllObjects.forEach (function (obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.getAllObjects.forEach = (function (obj) {
      obj.move();
    })
  };

  Game.prototype.step = function () {

  };

  Game.prototype.remove = function () {

  };

  Game.prototype.checkCollisions = function () {

  };

  Game.prototype.applyGravity = function () {
    this.allObjects.forEach( function (obj) {

    })
  }
}())
