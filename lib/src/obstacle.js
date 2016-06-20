(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Obstacle = Slader.Obstacle = function(view) {
    this.radius = 43;
    this.posX = view.width + this.radius;
    this.posY = 100;
    this.velX = -50;
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
