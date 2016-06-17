(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Subject = Slader.Subject = function(view) {
    this.posX = view.width / 2;
    this.posY = view.height / 2;
    this.width = 200;
    this.height = 60;
    root.addEventListener("keydown", this.move.bind(this));
    root.addEventListener("keyup", this.stop.bind(this));
  };

  Subject.prototype.draw = function(ctx) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
  };

  Subject.prototype.move = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        this.velX = -20;
        break;
      case 38:
        this.velY = -20;
        break;
      case 39:
        this.velX = 20;
        break;
      case 40:
        this.velY = 20;
        break;
    }
    console.log(this.velX);
    console.log(this.velY);
  };

  Subject.prototype.stop = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        this.velX = 0;
        break;
      case 38:
        this.velY = 0;
        break;
      case 39:
        this.velX = 0;
        break;
      case 40:
        this.velY = 0;
        break;
    }
    console.log(this.velX);
    console.log(this.velY);
  };

})(this);
