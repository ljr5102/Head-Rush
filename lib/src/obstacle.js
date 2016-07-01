(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Obstacle = Slader.Obstacle = function(view, vel) {
    this.radius = [23, 33, 43][Math.floor(Math.random() * 3)];
    this.posX = view.width + this.radius;
    this.posY = [50, 100, 150, 200, 250, 300][Math.floor(Math.random() * 6)];
    this.velX = vel || -50;
    this.velY = 0;
    this.img = new Image();
    this.img.src = Slader.Obstacle.images[Math.floor(Math.random() * 1)];
    this.string = new Slader.String(this);
  };

  Obstacle.images = {
    0: "assets/images/egg.png"
  };

  Obstacle.levelVelocities = {
    // 1: -100,
    1: -300,
    2: -400,
    // 2: -200,
    3: -500,
    4: -600,
    5: -700,
    6: -700
  };

  Obstacle.obstaclesPerLevel = {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 50
  };

  Obstacle.generateRandomObstacles = function(game) {
    var obstacles = [];
    var numObstacles = Obstacle.obstaclesPerLevel[game.level];
    for (var i = 0; i < numObstacles; i++) {
      obstacles.push(new Obstacle(game.view, Obstacle.levelVelocities[game.level]));
    }
    return obstacles;
  };

  Obstacle.prototype.cutFromString = function(subjectPosition, objects) {
    this.string.isCut = true;
    this.string.cutPositionY = subjectPosition;
    objects.push(new Slader.MockString(this.string.cutPositionY, this.posX, this.velX));
    this.string.cutDelta = (this.posY - this.radius) - subjectPosition;
  };

  Obstacle.prototype.fall = function() {
    this.velY = 200;
  };

  Obstacle.prototype.draw = function(ctx) {
    // ctx.beginPath();
    // ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fill();
    // ctx.stroke();
    // var img = new Image();
    // img.src = this.img;
    ctx.drawImage(this.img, this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
    this.string.draw(ctx);
  };

  Obstacle.prototype.move = function(delta) {
    this.posX = this.posX + this.velX * delta;
    this.posY = this.posY + this.velY * delta;
    this.string.move();
  };

  Obstacle.prototype.isCollidedWithPlatform = function(platform) {
    return (this.posY + this.radius > platform.posY);
  };

  Obstacle.prototype.explode = function() {
    this.velY = 0;
    this.velX = 0;
  };

})(this);
