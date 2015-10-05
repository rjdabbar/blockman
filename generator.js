(function () {
  window.Blockman = window.Blockman || {};

  var Generator = Blockman.Generator = function () {};

  Generator.generateWorld = function (game) {
    return {
      "game": game,
      "numBlocks": 10,
      "numGaps": 0,
    }
  };

  Generator.generatePlayer = function (game) {
    return {
      "botL": [10, game.groundLevel],
      "botR": [60, game.groundLevel],
      "height": 100,
      "color": "orange",
      "dir": "right",
      "game": game,
      "speed": 0,
      "vert": 0
    };
  };

  Generator.generateGoon = function (game) {
    return {
      "botL": [10, game.groundLevel],
      "botR": [60, game.groundLevel],
      "color": "brown",
      "dir": "left",
      "game": game,
      "speed": 0,
      "vert": 0
    };
  };

  Generator.generateBreakableBlock = function (game, pos) {
    return {
      "width": 75,
      "height": 75,
      "pos": pos || [0, game.groundLevel],
      "game": game,
      "color": "black",
      "breakable": true,
      "hasItems": false,
      "coins": 0
    };
  };

  Generator.generateUnbreakableBlock = function (game, pos) {
    return {
      "width": 75,
      "height": 75,
      "pos": pos || [0, game.groundLevel],
      "game": game,
      "color": "blue",
      "breakable": false,
      "hasItems": false,
      "coins": 0
    };
  };

  Generator.generateGround = function (game) {
    return {
      "x1": -10000,
      "y1": game.groundLevel,
      "width": 20000,
      "height": 300
    };
  }

  Generator.generateGap = function () {
    return {
      "width": 100,
      "height": 100
    };
  };
}())
