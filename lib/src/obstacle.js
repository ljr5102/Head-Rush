(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Obstacle = Slader.Obstacle = function(view, vel) {
    this.radius = 43;
    this.posX = view.width + this.radius;
    this.posY = 100;
    this.velX = vel || -50;
  };

  Obstacle.generateRandomObstacles = function(view, level) {
    var obstacles = [];
    for (var i = 0; i < 10; i++) {
      obstacles.push(new Obstacle(view, -100));
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
