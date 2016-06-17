(function(root) {

  describe("Subject", function() {
    describe("Constructor function", function() {
      it("creates an object with coordinates, height, and width", function() {
        var mockView = {width: 800, height: 400};
        var subject = new root.Slader.Subject(mockView);
        expect(subject.width).toEqual(200);
        expect(subject.height).toEqual(60);
        expect(subject.posX).toEqual(400);
        expect(subject.posY).toEqual(200);
      });
    });
  });


})(this);
