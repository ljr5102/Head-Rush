(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Game = Slader.Game = function(view) {
    this.view = view;
    this.view.canvas.addEventListener("click", this.startGame.bind(this));
  };

  Game.prototype.startGame = function() {
    this.view.draw();
  };

})(this);
