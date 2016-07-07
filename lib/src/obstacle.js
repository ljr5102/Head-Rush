(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Obstacle = Slader.Obstacle = function(view, vel) {
    var randObs = Math.floor(Math.random() * 10);
    switch (randObs) {
      case 0:
        Obstacle.createEgg(this, view);
        break;
      case 1:
        Obstacle.createGlasses(this, view);
        break;
      case 2:
        Obstacle.createHouse(this, view);
        break;
      case 3:
        Obstacle.createIceCream(this, view);
        break;
      case 4:
        Obstacle.createLog(this, view);
        break;
      case 5:
        Obstacle.createPencil(this, view);
        break;
      case 6:
        Obstacle.createShip(this, view);
        break;
      case 7:
        Obstacle.createShoe(this, view);
        break;
      case 8:
        Obstacle.createTooth(this, view);
        break;
      case 9:
        Obstacle.createWorm(this, view);
        break;
    }
    // this.radius = [23, 33, 43][Math.floor(Math.random() * 3)];
    // this.posX = view.width + this.radius;
    // this.posY = [50, 100, 150, 200, 250, 300][Math.floor(Math.random() * 6)];
    this.velX = vel || -50;
    this.velY = 0;
    this.string = new Slader.String(this);
  };

  Obstacle.createEgg = function(obs, view) {
    obs.shape = "circle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[0];
    obs.radius = [23, 33, 43][Math.floor(Math.random() * 3)];
    obs.posX = view.width + obs.radius;
    obs.posY = [50, 100, 150, 200, 250, 300][Math.floor(Math.random() * 6)];
  };

  Obstacle.createGlasses = function(obs, view) {
    obs.shape = "rectangle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[1];
    var rand = Math.floor(Math.random() * 3);
    obs.width = [46, 66, 86][rand];
    obs.posX = view.width;
    obs.height = [23, 33, 43][rand];
    obs.posY = [30, 80, 130, 180, 230, 280][Math.floor(Math.random() * 6)];
  };

  Obstacle.createHouse = function(obs, view) {
    obs.shape = "rectangle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[2];
    var rand = Math.floor(Math.random() * 3);
    obs.width = [46, 66, 86][rand];
    obs.posX = view.width;
    obs.height = obs.width;
    obs.posY = [20, 50, 100, 150, 200, 250][Math.floor(Math.random() * 6)];
  };
  Obstacle.createIceCream = function(obs, view) {
    obs.shape = "circle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[3];
    obs.radius = [23, 33, 43][Math.floor(Math.random() * 3)];
    obs.posX = view.width + obs.radius;
    obs.posY = [50, 100, 150, 200, 250, 300][Math.floor(Math.random() * 6)];
  };
  Obstacle.createLog = function(obs, view) {
    obs.shape = "rectangle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[4];
    var rand = Math.floor(Math.random() * 3);
    obs.width = [46, 66, 86][rand];
    obs.posX = view.width;
    obs.height = [23, 33, 43][rand];
    obs.posY = [30, 80, 130, 180, 230, 280][Math.floor(Math.random() * 6)];
  };
  Obstacle.createPencil = function(obs, view) {
    obs.shape = "rectangle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[5];
    var rand = Math.floor(Math.random() * 3);
    obs.width = [46, 66, 86][rand];
    obs.posX = view.width;
    obs.height = [6, 9, 11][rand];
    obs.posY = [30, 80, 130, 180, 230, 280][Math.floor(Math.random() * 6)];
  };
  Obstacle.createShip = function(obs, view) {
    obs.shape = "rectangle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[6];
    var rand = Math.floor(Math.random() * 3);
    obs.width = [90, 115, 150][rand];
    obs.posX = view.width;
    obs.height = [37, 47, 62][rand];
    obs.posY = [30, 80, 130, 180, 230, 280][Math.floor(Math.random() * 6)];
  };
  Obstacle.createShoe = function(obs, view) {
    obs.shape = "rectangle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[7];
    var rand = Math.floor(Math.random() * 3);
    obs.width = [75, 100, 115][rand];
    obs.posX = view.width;
    obs.height = [39, 52, 60][rand];
    obs.posY = [30, 80, 130, 180, 230, 280][Math.floor(Math.random() * 6)];
  };
  Obstacle.createTooth = function(obs, view) {
    obs.shape = "rectangle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[8];
    var rand = Math.floor(Math.random() * 3);
    obs.width = [75, 87, 100][rand];
    obs.posX = view.width;
    obs.height = [50, 58, 67][rand];
    obs.posY = [30, 80, 130, 180, 230, 280][Math.floor(Math.random() * 6)];
  };
  Obstacle.createWorm = function(obs, view) {
    obs.shape = "rectangle";
    obs.img = new Image();
    obs.img.src = Slader.Obstacle.images[9];
    var rand = Math.floor(Math.random() * 3);
    obs.width = [75, 87, 100][rand];
    obs.posX = view.width;
    obs.height = [22, 26, 30][rand];
    obs.posY = [30, 80, 130, 180, 230, 280][Math.floor(Math.random() * 6)];
  };

  Obstacle.images = {
    0: "assets/images/egg.png",
    1: "assets/images/glasses.png",
    2: "assets/images/house.png",
    3: "assets/images/ice_cream.png",
    4: "assets/images/log.png",
    5: "assets/images/pencil.png",
    6: "assets/images/ship.png",
    7: "assets/images/shoe.png",
    8: "assets/images/tooth.png",
    9: "assets/images/worm.png"
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
    if (this.shape === "circle") {
      objects.push(new Slader.MockString(this.string.cutPositionY, this.posX, this.velX));
      this.string.cutDelta = (this.posY - this.radius) - subjectPosition;
    } else if (this.shape === "rectangle") {
      objects.push(new Slader.MockString(this.string.cutPositionY, this.posX + (this.width / 2), this.velX));
      this.string.cutDelta = this.posY - subjectPosition;
    }
  };

  Obstacle.prototype.fall = function() {
    this.velY = 200;
  };

  Obstacle.prototype.draw = function(ctx) {
    switch (this.shape) {
      case "rectangle":
        this.drawRect(ctx);
        break;
      case "circle":
        this.drawCirc(ctx);
        break;
    }
    // ctx.beginPath();
    // ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fill();
    // ctx.stroke();
    // var img = new Image();
    // img.src = this.img;
  };

  Obstacle.prototype.drawRect = function(ctx) {
    ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    this.string.draw(ctx);
  };

  Obstacle.prototype.drawCirc = function(ctx) {
    ctx.drawImage(this.img, this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
    this.string.draw(ctx);
  };

  Obstacle.prototype.move = function(delta) {
    this.posX = this.posX + this.velX * delta;
    this.posY = this.posY + this.velY * delta;
    this.string.move();
  };

  Obstacle.prototype.isCollidedWithPlatform = function(platform) {
    if (this.shape === "circle") {
      return (this.posY + this.radius > platform.posY);
    } else if (this.shape === "rectangle") {
      return (this.posY + this.height > platform.posY);
    }
  };

  Obstacle.prototype.explode = function() {
    this.velY = 0;
    this.velX = 0;
  };

})(this);
