(function () {
  window.Blockman = window.Blockman || {};

  var GameView = Blockman.GameView = function (canvas) {
      this.keys = {w: false, a: false, d: false, space: false};
      this.game;
      this.ctx = canvas.getContext("2d");
      this.bindKeyEvents();
  };

  GameView.prototype.bindKeyEvents = function () {
    var keys = this.keys;
    var doc = $(document);

    doc.keydown(function (e) {
      // W KEY
      if (e.keyCode === 87) {
        keys.w = true;
      }
      // A KEY
      if (e.keyCode === 65) {
        keys.a = true;
      }
      // D KEY
      if (e.keyCode === 68) {
        keys.d = true;
      }
      // SPACE BAR
      if (e.keyCode === 32 ) {
        keys.space = true;
      }
    });

    doc.keyup(function (e) {
      // W KEY
      if (e.keyCode === 87) {
        keys.w = false;
      }
      // A KEY
      if (e.keyCode === 65) {
        keys.a = false;
      }
      // D KEY
      if (e.keyCode === 68) {
        keys.d = false;
      }
      // SPACE BAR
      if (e.keyCode === 32 ) {
        keys.space = false;
      }
    });
  };


}())
