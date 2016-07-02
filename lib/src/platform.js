(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Platform = Slader.Platform = function(view, posX) {
    this.posX = posX || 0;
    this.posY = view.height - 50;
    this.width = view.width;
    this.height = 50;
    this.velX = -50;
  };

  Platform.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "darkgray";
    ctx.rect(this.posX, this.posY, this.width / 2, this.height);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "lightgray";
    ctx.rect(this.posX + this.width / 2, this.posY, this.width / 2, this.height);
    ctx.fill();
    // ctx.fillRect(this.posX, this.posY, this.width / 2, this.height);
    // ctx.fillStyle = "black";
    // ctx.fillRect(this.posX * 2, this.posY, this.width / 2, this.height);
  };

  Platform.prototype.move = function(delta) {
    this.posX = this.posX + this.velX * delta;
  };

})(this);
