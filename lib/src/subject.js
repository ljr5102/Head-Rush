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
    view.setSubjectKeyListeners(this.addVelocity.bind(this), this.stopMotion.bind(this));
    view.setSubjectTouchListeners(this.addTouchVelocity.bind(this), this.removeTouchVelocity.bind(this));
  };

  Subject.prototype.draw = function(ctx) {
    var img = new Image();
    if (this.exploding) {
      if (this.sequence < 10) {
        img.src = "assets/images/subject/blast_one.png";
      } else {
        img.src = "assets/images/subject/blast_two.png";
        if (this.sequence > 20) {
          this.sequence = 0;
        }
      }
    } else {
      img.src = "assets/images/subject/brain.png";
    }
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
    if (this.exploding) {
      return;
    }
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

  Subject.prototype.addTouchVelocity = function(e) {
    e.preventDefault();
    var can = document.getElementById("canvas");
    var par = can.parentElement;
    var posX = e.pageX - par.offsetLeft;
    var posY = e.pageY - par.offsetTop;
    var perX = (posX / can.width) * 100;
    var perY = (posY / can.height) * 100;
    if (perX > 0 && perX < 25) {
      this.leftSpd = 300;
    } else if (perX > 75 && perX < 100) {
      this.rightSpd = 300;
    }

    if (perY > 0 && perY < 25) {
      this.upSpd = 300;
    } else if (perY > 75 && perY < 100) {
      this.downSpd = 300;
    }
  };

  Subject.prototype.removeTouchVelocity = function(e) {
    e.preventDefault();
    this.leftSpd = 0;
    this.rightSpd = 0;
    this.upSpd = 0;
    this.downSpd = 0;
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
    } else if (this.posY + this.height > view.height - 50) {
      this.posY = view.height - 50 - this.height;
    }
  };

})(this);
