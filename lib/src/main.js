(function(root) {

  var Slader = root.Slader = root.Slader || {};

  root.addEventListener("DOMContentLoaded", function() {
    var view = new Slader.View();
    var game = new Slader.Game(view);
  });

})(this);
