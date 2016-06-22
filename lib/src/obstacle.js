(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Obstacle = Slader.Obstacle = function(view, vel) {
    this.radius = [23, 33, 43][Math.floor(Math.random() * 3)];
    this.posX = view.width + this.radius;
    this.posY = [100, 200, 300][Math.floor(Math.random() * 3)];
    this.velX = vel || -50;
  };

  Obstacle.levelVelocities = {
    1: -100,
    2: -200,
    3: -300,
    4: -400,
    5: -500,
    6: -500
  };

  Obstacle.obstaclesPerLevel = {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 50
  };

  Obstacle.generateRandomObstacles = function(game) {
    var obstacles = [];
    var numObstacles = Obstacle.obstaclesPerLevel[game.level];
    for (var i = 0; i < numObstacles; i++) {
      obstacles.push(new Obstacle(game.view, Obstacle.levelVelocities[game.level]));
    }
    return obstacles;
  };

  Obstacle.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
  };

  Obstacle.prototype.move = function(delta) {
    this.posX = this.posX + this.velX * delta;
  };

})(this);
