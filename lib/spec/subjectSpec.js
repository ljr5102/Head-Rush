(function(root) {

  describe("Subject", function() {
    describe("Constructor function", function() {
      it("creates an object with coordinates, height, width, and no velocity", function() {
        var mockView = {width: 800, height: 400};
        var subject = new root.Slader.Subject(mockView);
        expect(subject.width).toEqual(160);
        expect(subject.height).toEqual(65);
        expect(subject.posX).toEqual(400);
        expect(subject.posY).toEqual(200);
        expect(subject.leftSpd).toEqual(0);
        expect(subject.rightSpd).toEqual(0);
        expect(subject.downSpd).toEqual(0);
        expect(subject.upSpd).toEqual(0);
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
        expect(subject.leftSpd).toEqual(300);
      });
      it("Gives negative Y velocity when the up key is pressed", function() {
        var e = {keyCode: 38};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.upSpd).toEqual(300);
      });
      it("Gives positive X velocity when the right key is pressed", function() {
        var e = {keyCode: 39};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.rightSpd).toEqual(300);
      });
      it("Gives positive Y velocity when the down key is pressed", function() {
        var e = {keyCode: 40};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.downSpd).toEqual(300);
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
        expect(subject.leftSpd).toEqual(300);
        subject.stopMotion(e);
        expect(subject.leftSpd).toEqual(0);

      });
      it("Gives 0 Y velocity when the up key is lifted", function() {
        var e = {keyCode: 38};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.upSpd).toEqual(300);
        subject.stopMotion(e);
        expect(subject.upSpd).toEqual(0);
      });
      it("Gives 0 X velocity when the right key is lifted", function() {
        var e = {keyCode: 39};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.rightSpd).toEqual(300);
        subject.stopMotion(e);
        expect(subject.rightSpd).toEqual(0);
      });
      it("Gives 0 Y velocity when the down key is lifted", function() {
        var e = {keyCode: 40};
        e.preventDefault = jasmine.createSpy("preventDefault spy");
        subject.addVelocity(e);
        expect(subject.downSpd).toEqual(300);
        subject.stopMotion(e);
        expect(subject.downSpd).toEqual(0);
      });
    });

    describe("Move", function() {
      var subject, mockView;
      beforeEach(function() {
        mockView = {width: 800, height: 400};
        subject = new root.Slader.Subject(mockView);
      });
      it("Calculates the new x and y position properly", function() {
        subject.rightSpd = 100;
        subject.downSpd = 150;
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
    describe("logic for upper and lower segments of subject with circular obstacle", function() {
      it("returns false when obstacle lowest point does not touch the subject", function() {
        var obs = {radius: 40, posX: 480, posY: 180, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns true when obstacle lowest point is just past the upper segment", function() {
        var obs = {radius: 40, posX: 480, posY: 180.001, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(true);
      });
      it("returns true when obstacle highest point is just before the lower segment", function() {
        var obs = {radius: 40, posX: 480, posY: 294.9, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(true);
      });
      it("returns false when the obstacle highest point is past the upper segment", function() {
        var obs = {radius: 40, posX: 480, posY: 295, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle left most point is not between the segments (p1)", function() {
        var obs = {radius: 40, posX: 555, posY: 180, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle left most point is not between the segments (p2)", function() {
        var obs = {radius: 40, posX: 555, posY: 180.001, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle left most point is not between the segments (p3)", function() {
        var obs = {radius: 40, posX: 555, posY: 294.9, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle left most point is not between the segments (p4)", function() {
        var obs = {radius: 40, posX: 555, posY: 295, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle right most point is not between the segments (p1)", function() {
        var obs = {radius: 40, posX: 360, posY: 185, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle right most point is not between the segments (p2)", function() {
        var obs = {radius: 40, posX: 360, posY: 180.001, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle right most point is not between the segments (p3)", function() {
        var obs = {radius: 40, posX: 360, posY: 294.9, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });
      it("returns false when obstacle right most point is not between the segments (p4)", function() {
        var obs = {radius: 40, posX: 360, posY: 295, shape: "circle"};
        expect(subject.isCollidedWithObstacle(obs)).toEqual(false);
      });

    });
  });

  describe("isCollidedWithString", function() {
    var subject, mockView;
    beforeEach(function() {
      mockView = {width: 800, height: 400};
      subject = new root.Slader.Subject(mockView);
    });
    describe("logic for upper and lower segments of subject with string", function() {
      it("returns false when string lowest point does not touch the subject", function() {
        var str = {topX: 420, bottomX: 420, topY: 0, bottomY: 199.99};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns true when string lowest point is just past the upper segment", function() {
        var str = {topX: 420, bottomX: 420, topY: 0, bottomY: 200.01};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(true);
      });
      it("returns true when string highest point is just before the lower segment", function() {
        var str = {topX: 420, bottomX: 420, topY: 264.99, bottomY: 300};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(true);
      });
      it("returns false when the string highest point is past the upper segment", function() {
        var str = {topX: 420, bottomX: 420, topY: 265.01, bottomY: 300};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns false when string x coordinate left of the subject (p1)", function() {
        var str = {topX: 380, bottomX: 380, topY: 0, bottomY: 180};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns false when string x coordinate left of the subject (p2)", function() {
        var str = {topX: 380, bottomX: 380, topY: 0, bottomY: 220};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns false when string x coordinate left of the subject (p3)", function() {
        var str = {topX: 380, bottomX: 380, topY: 220, bottomY: 340};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns false when string x coordinate left of the subject (p4)", function() {
        var str = {topX: 380, bottomX: 380, topY: 260, bottomY: 340};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns false when string x coordinate right of the subject (p1)", function() {
        var str = {topX: 560, bottomX: 560, topY: 0, bottomY: 180};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns false when string x coordinate right of the subject (p2)", function() {
        var str = {topX: 560, bottomX: 560, topY: 0, bottomY: 220};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns false when string x coordinate right of the subject (p3)", function() {
        var str = {topX: 560, bottomX: 560, topY: 220, bottomY: 340};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });
      it("returns false when string x coordinate right of the subject (p4)", function() {
        var str = {topX: 560, bottomX: 560, topY: 260, bottomY: 340};
        var obs = {string: str};
        expect(subject.isCollidedWithString(obs)).toEqual(false);
      });

    });
  });


})(this);
