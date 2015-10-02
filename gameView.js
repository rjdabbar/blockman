(function () {
  window.Blockman = window.Blockman || {};

  var GameView = Blockman.GameView = function (canvas) {
      this.keys = {shift: false, a: false, d: false, space: false};
      this.game = new Blockman.Game();
      this.ctx = canvas.getContext("2d");
      this.bindKeyEvents();
  };

  GameView.prototype.start = function () {
    setInterval(function () {
      this.game.draw(this.ctx);
      this.act();
      this.game.step();
    }.bind(this), 20)
  };

  GameView.prototype.bindKeyEvents = function () {
    var keys = this.keys;
    var doc = $(document);

    doc.keydown(function (e) {
      // SHIFT KEY
      if (e.keyCode === 16) {
        e.preventDefault();
        keys.shift = true;
      }
      // A KEY
      if (e.keyCode === 65) {
        e.preventDefault();
        keys.a = true;
      }
      // D KEY
      if (e.keyCode === 68) {
        e.preventDefault();
        keys.d = true;
      }
      // SPACE BAR
      if (e.keyCode === 32 ) {
        e.preventDefault();
        keys.space = true;
      }
    });

    doc.keyup(function (e) {
      // SHIFT KEY
      if (e.keyCode === 16) {
        e.preventDefault();
        keys.shift = false;
      }
      // A KEY
      if (e.keyCode === 65) {
        e.preventDefault();
        keys.a = false;
      }
      // D KEY
      if (e.keyCode === 68) {
        e.preventDefault();
        keys.d = false;
      }
      // SPACE BAR
      if (e.keyCode === 32 ) {
        e.preventDefault();
        keys.space = false;
      }
    });
  };

  GameView.prototype.act = function () {
    if (this.keys.shift) {
      if (this.keys.a) {
        this.game.player.dir = "left"
        this.game.player.run();
      };
      if (this.keys.d) {
        this.game.player.dir = "right"
        this.game.player.run();
      }
    };

    if (this.keys.d) {
      this.game.player.dir = "right"
      this.game.player.walk();
    };

    if (this.keys.a) {
      this.game.player.dir = "left"
      this.game.player.walk();
    };

    if (this.keys.space) {
      this.game.player.jump();
    }
  };


}())
