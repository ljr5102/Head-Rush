(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Platform = Slader.Platform = function(view) {
    this.posX = 0;
    this.posY = view.height - 50;
    this.width = view.width;
    this.height = 50;
  };

  Platform.prototype.draw = function(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
  };

  Platform.prototype.move = function(delta) {
    return;
  };

})(this);
