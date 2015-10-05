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

    this.viewport = new Blockman.Rectangle(this.xView, this.yView, this.width, this.height);
    this.world = this.game.world;
    this.followed = this.game.player;
    console.log(this.followed);
  };

  Viewport.prototype.follow = function (xDeadZone, yDeadZone) {
    this.xDeadZone = xDeadZone;
    this.yDeadZone = yDeadZone;
  };

  Viewport.prototype.act = function () {
    if (this.axis == AXIS.HORIZONTAL || this.axis == AXIS.BOTH) {
      if(this.followed.x - this.xView  + this.xDeadZone > this.wView) {
        this.xView = this.followed.x - (this.wView - this.xDeadZone);
      } else if(this.followed.x  - this.xDeadZone < this.xView) {
        this.xView = this.followed.x  - this.xDeadZone;
      };
    };

    if(this.axis == AXIS.VERTICAL || this.axis == AXIS.BOTH) {
      if(this.followed.y - this.yView + this.yDeadZone > this.hView) {
        this.yView = this.followed.y - (this.hView - this.yDeadZone);
      } else if(this.followed.y - this.yDeadZone < this.yView) {
        this.yView = this.followed.y - this.yDeadZone;
      };
    };

    this.viewport.set(this.xView, this.yView);

    if(!this.viewport.within(this.world)) {
      if(this.viewport.left < this.world.left) {
        this.xView = this.world.left;
      };
      if(this.viewport.top < this.world.top) {
        this.yView = this.world.top;
      };
      if(this.viewport.right > this.world.right) {
        this.xView = this.world.right - this.wView;
      };
      if(this.viewport.bottom > this.world.bottom) {
        this.yView = this.world.bottom - this.hView;
      };
    };
  };
}())
