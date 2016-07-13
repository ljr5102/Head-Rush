(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var View = Slader.View = function() {
    this.canvas = document.getElementById("canvas");
    this.width = parseInt(this.canvas.getAttribute("width"));
    this.height = parseInt(this.canvas.getAttribute("height"));
    this.ctx = this.canvas.getContext("2d");
  };

  View.prototype.draw = function(objects) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (var i = 0; i < objects.length; i++) {
      objects[i].draw(this.ctx);
    }
  };

})(this);
