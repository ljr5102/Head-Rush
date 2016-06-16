(function(root) {

  var Slader = root.Slader = root.Slader || {};

  root.addEventListener("DOMContentLoaded", function() {
    console.log("I'm all loaded!");
    var game = new Slader.Game();
    var view = new Slader.View(game);
  });

})(this);
