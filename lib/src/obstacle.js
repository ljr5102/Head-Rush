(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Obstacle = Slader.Obstacle = function(view) {
    this.posX = view.width;
    this.posY = 10;
    this.radius = 10;
  };

  Obstacle.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  };

})(this);
