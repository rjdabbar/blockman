(function () {
  window.Blockman = window.Blockman || {};
  var AXIS = {
    NONE: "none",
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical",
    BOTH: "both"
  };

  var Viewport = Blockman.Viewport = function (argsObj) {
    this.xView = argsObj.xView || 0;
    this.yView = argsObj.yView || 0;
    this.xDeadZone = 0;
    this.yDeadZone = 0;
    this.width = argsObj.width;
    this.height = argsObj.height;
    this.axis = AXIS.BOTH
    this.game = argsObj.game;

    this.viewPort = new Blockman.Rectangle(this.xView, this.yView, this.width, this.height);

    this.world = this.game.world;

  }
}())
