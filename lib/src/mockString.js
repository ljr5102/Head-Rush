(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var MockString = Slader.MockString = function(posY, posX, velX) {
    this.posX = posX;
    this.topY = 0;
    this.bottomY = posY;
    this.velX = velX;
  };

  MockString.prototype.move = function(delta) {
    this.posX = this.posX + this.velX * delta;
  };

  MockString.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.posX, this.topY);
    ctx.lineTo(this.posX, this.bottomY);
    ctx.stroke();
  };

})(this);
