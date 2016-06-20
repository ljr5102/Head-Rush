(function(root) {

  describe("Obstacle", function() {
    describe("Constructor function", function() {
      it("creates an object with coordinates, radius, and x velocity", function() {
        var mockView = {width: 800, height: 400};
        var obstacle = new root.Slader.Obstacle(mockView);
        expect(obstacle.radius).toEqual(43);
        expect(obstacle.posX).toEqual(843);
        expect(obstacle.posY).toEqual(100);
        expect(obstacle.velX).toEqual(-50);
      });
    });

    describe("Move", function() {
      var obstacle, mockView;
      beforeEach(function() {
        mockView = {width: 800, height: 400};
        obstacle = new root.Slader.Obstacle(mockView);
      });
      it("Calculates the new x and y position properly", function() {
        obstacle.move(1.23432);
        expect(obstacle.posX).toEqual(781.284);
        expect(obstacle.posY).toEqual(100);
      });
    });
  });


})(this);
