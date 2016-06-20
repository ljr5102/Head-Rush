(function(root) {

  describe("Subject", function() {
    describe("Constructor function", function() {
      it("creates an object with coordinates, height, width, and no velocity", function() {
        var mockView = {width: 800, height: 400};
        var subject = new root.Slader.Subject(mockView);
        expect(subject.width).toEqual(115);
        expect(subject.height).toEqual(45);
        expect(subject.posX).toEqual(400);
        expect(subject.posY).toEqual(200);
        expect(subject.velX).toEqual(0);
        expect(subject.velY).toEqual(0);
      });
    });

    describe("Add velocity", function() {
      var subject, mockView;
      beforeEach(function() {
        mockView = {width: 800, height: 400};
        subject = new root.Slader.Subject(mockView);
      });
      it("Gives negative X velocity when the left key is pressed", function() {
        var e = {keyCode: 37};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.velX).toEqual(-20);
      });
      it("Gives negative Y velocity when the up key is pressed", function() {
        var e = {keyCode: 38};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.velY).toEqual(-20);
      });
      it("Gives positive X velocity when the right key is pressed", function() {
        var e = {keyCode: 39};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.velX).toEqual(20);
      });
      it("Gives positive Y velocity when the down key is pressed", function() {
        var e = {keyCode: 40};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.velY).toEqual(20);
      });
    });

    describe("Stop motion", function() {
      var subject, mockView;
      beforeEach(function() {
        mockView = {width: 800, height: 400};
        subject = new root.Slader.Subject(mockView);
      });
      it("Gives 0 X velocity when the left key is lifted", function() {
        var e = {keyCode: 37};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.velX).toEqual(-20);
        subject.stopMotion(e);
        expect(subject.velX).toEqual(0);

      });
      it("Gives 0 Y velocity when the up key is lifted", function() {
        var e = {keyCode: 38};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.velY).toEqual(-20);
        subject.stopMotion(e);
        expect(subject.velY).toEqual(0);
      });
      it("Gives 0 X velocity when the right key is lifted", function() {
        var e = {keyCode: 39};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.velX).toEqual(20);
        subject.stopMotion(e);
        expect(subject.velX).toEqual(0);
      });
      it("Gives 0 Y velocity when the down key is lifted", function() {
        var e = {keyCode: 40};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.velY).toEqual(20);
        subject.stopMotion(e);
        expect(subject.velY).toEqual(0);
      });
    });

    describe("Move", function() {
      var subject, mockView;
      beforeEach(function() {
        mockView = {width: 800, height: 400};
        subject = new root.Slader.Subject(mockView);
      });
      it("Calculates the new x and y position properly", function() {
        subject.velX = 100;
        subject.velY = 150;
        subject.move(1.23432);
        expect(subject.posX).toEqual(523.432);
        expect(subject.posY).toEqual(385.148);
      });
    });
  });

  describe("isCollidedWithObstacle", function() {
    var subject, mockView;
    beforeEach(function() {
      mockView = {width: 800, height: 400};
      subject = new root.Slader.Subject(mockView);
    });
    describe("logic for upper and lower segments of subject with obstacle", function() {
      it("returns false when obstacle lowest point does not touch the subject", function() {
        var obs = {radius: 40, posX: 420, posY: 145};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns true when obstacle lowest point is just past the upper segment", function() {
        var obs = {radius: 40, posX: 420, posY: 160.001};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(true);
      });
      it("returns true when obstacle highest point is just before the lower segment", function() {
        var obs = {radius: 40, posX: 420, posY: 284.9};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(true);
      });
      it("returns false when the obstacle highest point is past the upper segment", function() {
        var obs = {radius: 40, posX: 420, posY: 285};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle left most point is not between the segments (p1)", function() {
        var obs = {radius: 40, posX: 555, posY: 145};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle left most point is not between the segments (p2)", function() {
        var obs = {radius: 40, posX: 555, posY: 160.001};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle left most point is not between the segments (p3)", function() {
        var obs = {radius: 40, posX: 555, posY: 284.9};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle left most point is not between the segments (p4)", function() {
        var obs = {radius: 40, posX: 555, posY: 285};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle right most point is not between the segments (p1)", function() {
        var obs = {radius: 40, posX: 360, posY: 145};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle right most point is not between the segments (p2)", function() {
        var obs = {radius: 40, posX: 360, posY: 160.001};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle right most point is not between the segments (p3)", function() {
        var obs = {radius: 40, posX: 360, posY: 284.9};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle right most point is not between the segments (p4)", function() {
        var obs = {radius: 40, posX: 360, posY: 285};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });

    });
  });


})(this);
