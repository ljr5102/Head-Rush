(function(root) {

  var Slader = root.Slader = root.Slader || {};

  root.addEventListener("DOMContentLoaded", function() {
    var view = new Slader.View();
    var audio = new Slader.Audio();
    var game = new Slader.Game(view, audio);
  });

})(this);
