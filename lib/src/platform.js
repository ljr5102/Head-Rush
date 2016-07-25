(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Platform = Slader.Platform = function(view, posX, srcImg) {
    this.posX = posX || 0;
    this.posY = view.height - 125;
    this.width = view.width;
    this.height = 125;
    this.velX = -75;
    this.srcNum = srcImg;
    this.src = Platform.groundImage[this.srcNum];
  };

  Platform.groundImage = {
    1: "assets/images/ground1.png",
    2: "assets/images/ground2.png"
  };

  Platform.prototype.introDraw = function(ctx) {
    var img = new Image();
    img.src = this.src;
    img.onload = function() {
      var canvas = document.getElementById("canvas");
      // var ctxt = canvas.getContext("2d");
      ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
    }.bind(this, ctx);
  };

  Platform.prototype.draw = function(ctx) {
    var img = new Image();
    img.src = this.src;
    ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
    // ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
    // ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
    // ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
    // ctx.beginPath();
    // ctx.fillStyle = "darkgray";
    // ctx.rect(this.posX, this.posY, this.width / 2, this.height);
    // ctx.fill();
    // ctx.beginPath();
    // ctx.fillStyle = "lightgray";
    // ctx.rect(this.posX + this.width / 2, this.posY, this.width / 2, this.height);
    // ctx.fill();
    // ctx.fillRect(this.posX, this.posY, this.width / 2, this.height);
    // ctx.fillStyle = "black";
    // ctx.fillRect(this.posX * 2, this.posY, this.width / 2, this.height);
  };

  Platform.prototype.move = function(delta) {
    this.posX = this.posX + (this.velX * delta);
  };

})(this);
