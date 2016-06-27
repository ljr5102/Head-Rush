(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Subject = Slader.Subject = function(view) {
    this.posX = view.width / 2;
    this.posY = view.height / 2;
    this.velX = 0;
    this.velY = 0;
    this.width = 115;
    this.height = 45;
    root.addEventListener("keydown", this.addVelocity.bind(this));
    root.addEventListener("keyup", this.stopMotion.bind(this));
  };

  Subject.prototype.draw = function(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
  };

  Subject.prototype.move = function(delta) {
    this.posX = this.posX + this.velX * delta;
    this.posY = this.posY + this.velY * delta;
  };

  Subject.prototype.addVelocity = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        this.velX = -200;
        break;
      case 38:
        this.velY = -200;
        break;
      case 39:
        this.velX = 200;
        break;
      case 40:
        this.velY = 200;
        break;
    }
  };

  Subject.prototype.stopMotion = function(e) {
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
  };

  Subject.prototype.isCollidedWithObstacle = function(obs) {
    if ((obs.posX + obs.radius) > this.posX && (obs.posX - obs.radius) < (this.posX + this.width)) {
       return (this.posY - (obs.radius + obs.posY) < 0 && this.posY + this.height - (obs.posY - obs.radius) > 0);
    }
    return false;
  };

  Subject.prototype.isCollidedWithString = function(obs) {
    var string = obs.string;
    if (this.posX < string.bottomX && this.posX + this.width > string.bottomX) {
      if (!(this.posY > string.bottomY || this.posY + this.height < string.topY)) {
        return true;
      }
    }
    return false;
  };

  Subject.prototype.handleOutOfBounds = function(view) {
    if (this.posX < 0) {
      this.posX = 0;
    } else if (this.posX + this.width > view.width) {
      this.posX = view.width - this.width;
    }
    if (this.posY < 0) {
      this.posY = 0;
    } else if (this.posY + this.height > view.height) {
      this.posY = view.height - this.height;
    }
  };

})(this);
