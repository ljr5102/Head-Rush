(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Game = Slader.Game = function(view) {
    this.view = view;
    this.view.canvas.addEventListener("click", this.startGame.bind(this));
  };

  Game.prototype.startGame = function() {
    this.initializeObjects();
    this.view.draw(this.allObjects);
  };

  Game.prototype.initializeObjects = function() {
    this.allObjects = [];
    this.subject = new Slader.Subject(this.view);
    this.allObjects.push(this.subject);
  };

})(this);
