(function () {
  window.Blockman = window.Blockman || {};

  var Game = Blockman.Game = function () {
    this.DIM_X = $(window).width();
    this.DIM_Y = $(window).height();

    this.groundLevel = 2*(this.DIM_Y/3)
    this.enemies= [];
    this.player = new Blockman.Player(Blockman.Generator.generatePlayer(this));
    this.world = new Blockman.World(Blockman.Generator.generateWorld(this));
    this.blocks = [];
    this.allObjects = this.getAllObjects();
    this.lives;
    this.score;
    this.gravity = -10; 
  };

  Game.prototype.getAllObjects = function () {
    var allObjects = [this.player].concat(this.enemies).concat(this.blocks)
    return allObjects;
  };

  Game.prototype.draw = function (ctx) {
    ctx.canvas.width = this.DIM_X;
    ctx.canvas.height = this.DIM_Y;
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.getAllObjects().forEach (function (obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.getAllObjects.forEach = (function (obj) {
      obj.applyGravity();
      obj.keepUpAboveGround();
    })
  };

  Game.prototype.step = function () {
    this.applyGravity();
  };

  Game.prototype.remove = function () {

  };

  Game.prototype.checkCollisions = function () {

  };

  Game.prototype.applyGravity = function () {
    this.allObjects.forEach( function (obj) {
      if (obj instanceof Blockman.MovingObject) {
        obj.applyGravity();
      }
    })
  }
}())
