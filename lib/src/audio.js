(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Audio = Slader.Audio = function(game) {
    this.muted = false;
  };

  Audio.prototype.obstacleCollision = function() {
    var aud = document.getElementsByClassName("obs-coll")[0];
    if (!this.muted) {
      aud.play();
    }
  };

})(this);
