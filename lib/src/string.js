(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var String = Slader.String = function(obs) {
    this.obstacle = obs;
    this.topX = obs.posX;
    this.bottomX = obs.posX;
    this.topY = 0;
    this.bottomY = obs.posY - obs.radius;
    this.isCut = false;
    this.cutPositionY = 0;
    this.cutDelta = 0;
  };

  String.prototype.move = function() {
    if (this.isCut) {
      this.cutMove();
    } else {
      this.topX = this.obstacle.posX;
      this.bottomX = this.obstacle.posX;
      this.topY = 0;
      this.bottomY = this.obstacle.posY - this.obstacle.radius;
    }
  };

  String.prototype.cutMove = function() {
    this.topX = this.obstacle.posX;
    this.bottomX = this.obstacle.posX;
    this.topY = 0;
    this.topOfCutY = (this.obstacle.posY - this.obstacle.radius) - this.cutDelta;
    this.bottomY = this.obstacle.posY - this.obstacle.radius;
    console.log(this.topOfCutY);
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
