(function(root) {

  describe("Subject", function() {
    describe("Constructor function", function() {
      it("creates an object with coordinates, height, width, and no velocity", function() {
        var mockView = {width: 800, height: 400};
        var subject = new root.Slader.Subject(mockView);
        expect(subject.width).toEqual(200);
        expect(subject.height).toEqual(60);
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


})(this);
