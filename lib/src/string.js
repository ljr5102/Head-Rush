(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var String = Slader.String = function(obs) {
    this.obstacle = obs;
    this.topY = 0;
    this.isCut = false;
    this.cutPositionY = 0;
    this.cutDelta = 0;
    if (obs.shape === "circle") {
      this.topX = obs.posX;
      this.bottomX = obs.posX;
      this.bottomY = obs.posY;
    } else if (this.shape === "rectangle") {
      this.topX = obs.posX + (obs.width / 2);
      this.bottomX = obs.posX + (obs.width / 2);
      this.bottomY = obs.posY + (obs.height / 2);
    }
  };

  String.prototype.move = function() {
    if (this.isCut) {
      this.cutMove();
    } else {
      if (this.obstacle.shape === "circle") {
        this.topX = this.obstacle.posX;
        this.bottomX = this.obstacle.posX;
        this.topY = 0;
        this.bottomY = this.obstacle.posY;
      } else if (this.obstacle.shape === "rectangle") {
        this.topX = this.obstacle.posX + (this.obstacle.width / 2);
        this.bottomX = this.obstacle.posX + (this.obstacle.width / 2);
        this.topY = 0;
        this.bottomY = this.obstacle.posY + (this.obstacle.height / 2);
      }
    }
  };

  String.prototype.cutMove = function() {
    if (this.obstacle.shape === "circle") {
      this.topX = this.obstacle.posX;
      this.bottomX = this.obstacle.posX;
      this.topY = 0;
      this.topOfCutY = (this.obstacle.posY - this.obstacle.radius) - this.cutDelta;
      this.bottomY = this.obstacle.posY;
    } else if (this.obstacle.shape === "rectangle") {
      this.topX = this.obstacle.posX + (this.obstacle.width / 2);
      this.bottomX = this.obstacle.posX + (this.obstacle.width / 2);
      this.topY = 0;
      this.topOfCutY = this.obstacle.posY - this.cutDelta;
      this.bottomY = this.obstacle.posY + (this.obstacle.height / 2);
    }
  };

  String.prototype.draw = function(ctx) {
    if (this.isCut) {
      this.cutDraw(ctx);
    } else {
      ctx.beginPath();
      ctx.moveTo(this.topX, this.topY);
      ctx.lineTo(this.bottomX, this.bottomY);
      ctx.stroke();
    }
  };

  String.prototype.cutDraw = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.topX, this.topY);
    ctx.lineTo(this.bottomX, this.cutPositionY);
    ctx.moveTo(this.topX, this.topOfCutY);
    ctx.lineTo(this.bottomX, this.bottomY);
    ctx.stroke();
  };

})(this);
