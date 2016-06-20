(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Obstacle = Slader.Obstacle = function(view) {
    this.posX = view.width;
    this.posY = 100;
    this.radius = 43;
  };

  Obstacle.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
  };

  Obstacle.prototype.move = function() {
    return;
  };

})(this);
