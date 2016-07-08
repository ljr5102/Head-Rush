(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Subject = Slader.Subject = function(view) {
    this.posX = view.width / 2;
    this.posY = view.height / 2;
    this.leftSpd = 0;
    this.rightSpd = 0;
    this.upSpd = 0;
    this.downSpd = 0;
    this.width = 160;
    this.height = 65;
    this.exploding = false;
    root.addEventListener("keydown", this.addVelocity.bind(this));
    root.addEventListener("keyup", this.stopMotion.bind(this));
  };

  Subject.prototype.draw = function(ctx) {
    var img = new Image();
    // ctx.fillStyle = "green";
    // ctx.fillRect(this.posX, this.posY, this.width, this.height);
    if (this.exploding) {
      if (this.sequence < 10) {
        img.src = "assets/images/blast_one.png";
      } else {
        img.src = "assets/images/blast_two.png";
        if (this.sequence > 20) {
          this.sequence = 0;
        }
      }
    } else {
      img.src = "assets/images/brain.png";
    }

    // ctx.fillStyle = this.fill;
    // debugger
    this.sequence += 1;
    ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
  };

  Subject.prototype.move = function(delta) {
    this.posX = this.posX + this.rightSpd * delta;
    this.posX = this.posX - this.leftSpd * delta;
    this.posY = this.posY + this.downSpd * delta;
    this.posY = this.posY - this.upSpd * delta;
  };

  Subject.prototype.addVelocity = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        this.leftSpd = 300;
        break;
      case 38:
        this.upSpd = 300;
        break;
      case 39:
        this.rightSpd = 300;
        break;
      case 40:
        this.downSpd = 300;
        break;
    }
  };

  Subject.prototype.stopMotion = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        this.leftSpd = 0;
        break;
      case 38:
        this.upSpd = 0;
        break;
      case 39:
        this.rightSpd = 0;
        break;
      case 40:
        this.downSpd = 0;
        break;
    }
  };

  Subject.prototype.explode = function() {
    this.exploding = true;
    this.sequence = 0;
  };

  Subject.prototype.isCollidedWithObstacle = function(obs) {
    if (obs.shape === "circle") {
      if ((obs.posX + obs.radius) > this.posX + 70 && (obs.posX - obs.radius) < (this.posX + this.width - 63)) {
        return (this.posY + 20 - (obs.radius + obs.posY) < 0 && this.posY + this.height - 10 - (obs.posY - obs.radius) > 0);
      }
      return false;
    } else if (obs.shape === "rectangle") {
      if ((obs.posX + obs.width) > this.posX + 70 && (obs.posX) < (this.posX + this.width - 63)) {
        return (this.posY + 20 - (obs.posY + obs.height) < 0 && this.posY + this.height - 10 - (obs.posY) > 0);
      }
      return false;
    }
  };
  // Subject.prototype.isCollidedWithObstacle = function(obs) {
  //   if (obs.shape === "circle") {
  //     if ((obs.posX + obs.radius) > this.posX && (obs.posX - obs.radius) < (this.posX + this.width)) {
  //       return (this.posY - (obs.radius + obs.posY) < 0 && this.posY + this.height - (obs.posY - obs.radius) > 0);
  //     }
  //     return false;
  //   } else if (obs.shape === "rectangle") {
  //     if ((obs.posX + obs.width) > this.posX && (obs.posX) < (this.posX + this.width)) {
  //       return (this.posY - (obs.posY + obs.height) < 0 && this.posY + this.height - (obs.posY) > 0);
  //     }
  //     return false;
  //   }
  // };

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
