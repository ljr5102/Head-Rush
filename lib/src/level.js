(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Level = Slader.Level = function(view) {
    this.type = "level";
    this.posX = view.width;
    this.posY = 0;
    this.width = 200;
    this.height = 200;
    this.velX = -175;
  };

  Level.prototype.draw = function(ctx) {
    // debugger
    var img = new Image();
    img.src = "assets/images/level1.png";
    ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
  };

  Level.prototype.move = function(delta) {
    this.posX = this.posX + (delta * this.velX);
  };

})(this);
