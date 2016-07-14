(function(root) {

  describe("Obstacle", function() {
    describe("Constructor function", function() {
      it("creates an object with x and y velocity", function() {
        var mockView = {width: 800, height: 400};
        var obstacle = new root.Slader.Obstacle(mockView, 300);
        expect(obstacle.velX).toEqual(300);
        expect(obstacle.velY).toEqual(0);
      });
    });

    describe("Create Egg", function() {
      it("creates an egg obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createEgg(obs, mockView);
        expect(obs.shape).toEqual("circle");
        expect([50, 100, 150, 200, 250, 300]).toContain(obs.posY);
        expect([23, 33, 43]).toContain(obs.radius);
      });
    });

    describe("Create Glasses", function() {
      it("creates a glasses obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createGlasses(obs, mockView);
        expect(obs.shape).toEqual("rectangle");
        expect([30, 80, 130, 180, 230, 280]).toContain(obs.posY);
        expect([46, 66, 86]).toContain(obs.width);
        expect([23, 33, 43]).toContain(obs.height);
      });
    });

    describe("Create House", function() {
      it("creates a house obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createHouse(obs, mockView);
        expect(obs.shape).toEqual("rectangle");
        expect([20, 50, 100, 150, 200, 250, 300]).toContain(obs.posY);
        expect([46, 66, 86]).toContain(obs.width);
        expect(obs.height).toEqual(obs.width);
      });
    });

    describe("Create Ice Cream", function() {
      it("creates an ice cream obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createIceCream(obs, mockView);
        expect(obs.shape).toEqual("circle");
        expect([50, 100, 150, 200, 250, 300]).toContain(obs.posY);
        expect([23, 33, 43]).toContain(obs.radius);
      });
    });

    describe("Create Log", function() {
      it("creates a log obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createLog(obs, mockView);
        expect(obs.shape).toEqual("rectangle");
        expect([30, 80, 130, 180, 230, 280]).toContain(obs.posY);
        expect([46, 66, 86]).toContain(obs.width);
        expect([23, 33, 43]).toContain(obs.height);
      });
    });

    describe("Create Pencil", function() {
      it("creates a pencil obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createPencil(obs, mockView);
        expect(obs.shape).toEqual("rectangle");
        expect([30, 80, 130, 180, 230, 280]).toContain(obs.posY);
        expect([46, 66, 86]).toContain(obs.width);
        expect([6, 9, 11]).toContain(obs.height);
      });
    });

    describe("Create Ship", function() {
      it("creates a ship obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createShip(obs, mockView);
        expect(obs.shape).toEqual("rectangle");
        expect([30, 80, 130, 180, 230, 280]).toContain(obs.posY);
        expect([90, 115, 150]).toContain(obs.width);
        expect([37, 47, 62]).toContain(obs.height);
      });
    });

    describe("Create Shoe", function() {
      it("creates a shoe obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createShoe(obs, mockView);
        expect(obs.shape).toEqual("rectangle");
        expect([30, 80, 130, 180, 230, 280]).toContain(obs.posY);
        expect([75, 100, 115]).toContain(obs.width);
        expect([39, 52, 60]).toContain(obs.height);
      });
    });

    describe("Create Tooth", function() {
      it("creates a tooth obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createTooth(obs, mockView);
        expect(obs.shape).toEqual("rectangle");
        expect([30, 80, 130, 180, 230, 280]).toContain(obs.posY);
        expect([75, 87, 100]).toContain(obs.width);
        expect([50, 58, 67]).toContain(obs.height);
      });
    });

    describe("Create Worm", function() {
      it("creates a worm obstacle", function() {
        var obs = {};
        var mockView = {width: 800, height: 400};
        root.Slader.Obstacle.createWorm(obs, mockView);
        expect(obs.shape).toEqual("rectangle");
        expect([30, 80, 130, 180, 230, 280]).toContain(obs.posY);
        expect([75, 87, 100]).toContain(obs.width);
        expect([22, 26, 30]).toContain(obs.height);
      });
    });

    describe("Move", function() {
      var obstacle, mockView;
      beforeEach(function() {
        mockView = {width: 800, height: 400};
        obstacle = new root.Slader.Obstacle(mockView);
        obstacle.shape = "circle";
        obstacle.radius = 100;
        obstacle.velX = -50;
        obstacle.posX = 900;
        obstacle.posY = 100;
      });
      it("Calculates the new x and y position properly", function() {
        obstacle.move(1.23432);
        expect(obstacle.posX).toEqual(838.284);
        expect(obstacle.posY).toEqual(100);
      });
    });
  });


})(this);
