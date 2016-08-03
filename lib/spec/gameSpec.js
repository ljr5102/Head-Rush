(function(root) {

  describe("Game", function() {
    var mockView;

    beforeEach(function() {
      mockView = {canvas: {}, width: 800, height: 400};
      mockView.canvas.addEventListener = jasmine.createSpy("addEventListener spy");
      mockView.draw = jasmine.createSpy("draw spy");
      mockView.drawInitialPlatform = jasmine.createSpy("draw initial spy");
      mockView.setStartListener = jasmine.createSpy("start listener spy");
      mockView.renderIntroScreen = jasmine.createSpy("render intro spy");
      mockView.displayScore = jasmine.createSpy("display score spy");
      mockView.setSubjectKeyListeners = jasmine.createSpy("subject listener spy");
      mockView.setSubjectTouchListeners = jasmine.createSpy("subject touch listener spy");
    });

    describe("Constructor function", function() {
      it("creates a view property on the game", function() {
        var game = new root.Slader.Game(mockView);
        expect(game.view).toBeDefined();
      });
    });

    describe("Initialize Objects", function() {
      it("initializes an array with one object", function() {
        var game = new root.Slader.Game(mockView);
        expect(game.allObjects).toBeUndefined();
        expect(game.subject).toBeUndefined();
        game.initializeObjects();
        expect(game.allObjects.length).toEqual(2);
        expect(game.subject instanceof root.Slader.Subject).toBeTruthy();
      });
    });
  });

})(this);
