(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Game = Slader.Game = function(view) {
    this.view = view;
    this.start = 0;
    this.view.canvas.addEventListener("click", this.startGame.bind(this));
  };

  Game.prototype.startGame = function() {
    this.initializeObjects();
    this.view.draw(this.allObjects);
    root.requestAnimationFrame(this.step.bind(this, 0));
  };

  Game.prototype.initializeObjects = function() {
    this.allObjects = [];
    this.subject = new Slader.Subject(this.view);
    this.obstacle = new Slader.Obstacle(this.view);
    this.allObjects.push(this.subject);
    this.allObjects.push(this.obstacle);
  };

  Game.prototype.step = function(time) {
    var elapsed = time - this.start;
    var elapsed_in_secs = elapsed / 1000;
    this.start = time;
    this.move(elapsed_in_secs);
    this.view.draw(this.allObjects);
    root.requestAnimationFrame(this.step.bind(this));
  };

  Game.prototype.move = function(delta) {
    for (var i = 0; i < this.allObjects.length; i++) {
      this.allObjects[i].move(delta);
    }
  };

})(this);
