(function(root) {

  describe("Game", function() {
    describe("Constructor function", function() {
      it("creates a view property on the game", function() {
        var mockView = {canvas: {}};
        mockView.canvas.addEventListener = jasmine.createSpy("addEventListener spy");
        var game = new root.Slader.Game(mockView);
        expect(game.view).toBeDefined();
      });
    });
  });

})(this);
