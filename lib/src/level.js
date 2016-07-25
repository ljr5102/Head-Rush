(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Level = Slader.Level = function(view, level) {
    this.type = "level";
    this.posX = view.width;
    this.posY = 0;
    this.width = 200;
    this.height = 200;
    this.velX = -175;
    this.level = level;
  };

  Level.levelTransitions = {
    1: "assets/images/level1.png",
    2: "assets/images/level2.png",
    3: "assets/images/level3.png",
    4: "assets/images/level4.png",
    5: "assets/images/level5.png"
  };

  Level.prototype.draw = function(ctx) {
    // debugger
    var img = new Image();
    img.src = Level.levelTransitions[this.level];
    ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
  };

  Level.prototype.move = function(delta) {
    this.posX = this.posX + (delta * this.velX);
  };

})(this);
