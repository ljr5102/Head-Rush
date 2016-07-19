(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Game = Slader.Game = function(view) {
    this.view = view;
    this.start = 0;
    this.cycles = 0;
    this.priorCycle = 0;
    this.gameOver = false;
    this.level = 1;
    this.view.canvas.addEventListener("click", this.startGame.bind(this));
    this.view.renderIntroScreen();
  };

  Game.cycleDeltaForLevel = {
    1: 75,
    2: 50,
    3: 40,
    4: 35,
    5: 30
  };

  Game.prototype.startGame = function() {
    if (this.cycles === 0) {
      this.initializeObjects();
      this.view.renderScore();
      this.view.draw(this.allObjects);
      root.requestAnimationFrame(this.step.bind(this, 0));
    }
  };

  Game.prototype.resetGame = function() {
    if (this.gameOver) {
      this.view.clearGameOver();
      this.start = 0;
      this.cycles = 0;
      this.priorCycle = 0;
      this.gameOver = false;
      this.level = 1;
      this.startGame();
    }
  };

  Game.prototype.initializeObjects = function() {
    this.allObjects = [];
    this.subject = new Slader.Subject(this.view);
    this.allObjects.push(this.subject);
    this.obstacles = [];
  };

  Game.prototype.handleObstacles = function() {
    if (!this.obstacles.length) {
      this.obstacles = new Slader.Obstacle.generateRandomObstacles(this);
      if (this.level < 6) {
        this.level += 1;
        this.transitioning = true;
        this.cycleForLevelUp = this.cycles;
      }
    }
    if (this.level === 2 || this.cycles - this.cycleForLevelUp > 500) {
      if (this.cycles - this.priorCycle >= Game.cycleDeltaForLevel[this.level - 1]) {
        this.allObjects.push(this.obstacles.pop());
        this.priorCycle = this.cycles;
      }
    }
  };

  Game.prototype.checkObjectCollisions = function() {
    for (var i = 0; i < this.allObjects.length; i++) {
      if (this.allObjects[i] instanceof Slader.Obstacle) {
        var obs = this.allObjects[i];
        if (this.subject.isCollidedWithObstacle(obs)) {
          this.subject.explode();
          this.gameOver = true;
        }
        if (this.subject.isCollidedWithString(obs) && !obs.string.isCut) {
          obs.cutFromString(this.subject.posY, this.allObjects);
          obs.fall();
        }
      }
    }
  };

  Game.prototype.checkBoundaries = function() {
    this.subject.handleOutOfBounds(this.view);
  };

  Game.prototype.step = function(time) {
    var elapsed = time - this.start;
    var elapsed_in_secs = elapsed / 1000;
    if (elapsed_in_secs > 0.0188) {
      elapsed_in_secs = 0.01668;
    }
    this.start = time;
    this.handleObstacles();
    this.checkObjectCollisions();
    this.checkBoundaries();
    this.cleanUp();
    this.move(elapsed_in_secs);
    this.view.draw(this.allObjects);
    this.cycles += 1;
    if (!this.gameOver) {
      root.requestAnimationFrame(this.step.bind(this));
    } else {
      this.view.renderGameOver();
      this.view.canvas.addEventListener("click", this.resetGame.bind(this));
      root.requestAnimationFrame(this.gameOverStep.bind(this));
    }
  };

  Game.prototype.gameOverStep = function() {
    this.view.draw(this.allObjects);
    root.requestAnimationFrame(this.gameOverStep.bind(this));
  };

  Game.prototype.move = function(delta) {
    for (var i = 0; i < this.allObjects.length; i++) {
      this.allObjects[i].move(delta);
    }
  };

  Game.prototype.cleanUp = function() {
    for (var i = 0; i < this.allObjects.length; i++) {
      if (this.allObjects[i] instanceof Slader.Obstacle) {
        var obs = this.allObjects[i];
        if (obs.posX + obs.radius < 0) {
          this.allObjects.splice(i, 1);
          i -= 1;
        }
      }
    }
  };

})(this);
