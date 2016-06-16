(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var View = Slader.View = function() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  };

  View.prototype.draw = function() {
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fillRect(0, 0, 150, 75);
  };

})(this);
