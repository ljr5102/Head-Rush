(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Score = Slader.Score = function(game) {
    this.game = game;
    this.total = 0;
  };

  Score.prototype.evasionPoints = function() {
    switch (this.game.level) {
      case 1:
        this.total += 5;
        break;
      case 2:
        this.total += 10;
        break;
      case 3:
        this.total += 15;
        break;
      case 4:
        this.total += 20;
        break;
      case 5:
        this.total += 35;
        break;
    }
    this.game.view.displayScore(this.total);
  };

  Score.prototype.destroyPoints = function() {
    switch (this.game.level) {
      case 1:
        this.total += 10;
        break;
      case 2:
        this.total += 20;
        break;
      case 3:
        this.total += 30;
        break;
      case 4:
        this.total += 40;
        break;
      case 5:
        this.total += 70;
        break;
    }
    this.game.view.displayScore(this.total);
  };

})(this);
