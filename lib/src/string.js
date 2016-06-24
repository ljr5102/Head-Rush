(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var String = Slader.String = function(obs) {
    this.obstacle = obs;
    this.topX = obs.posX;
    this.bottomX = obs.posX;
    this.topY = 0;
    this.bottomY = obs.posY - obs.radius;
  };

  String.prototype.move = function() {
    this.topX = this.obstacle.posX;
    this.bottomX = this.obstacle.posX;
    this.topY = 0;
    this.bottomY = this.obstacle.posY - this.obstacle.radius;
  };

  String.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.topX, this.topY);
    ctx.lineTo(this.bottomX, this.bottomY);
    ctx.stroke();
  };

})(this);
