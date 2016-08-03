(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var Audio = Slader.Audio = function(game) {
    this.muted = false;
    this.playing = undefined;
  };

  Audio.prototype.obstacleCollision = function() {
    var aud = document.getElementsByClassName("obs-coll")[0];
    if (!this.muted) {
      if (this.playing) {
        this.playing.pause();
      }
      this.playing = aud;
      this.playing.play();
    }
  };

  Audio.prototype.gameMusic = function() {
    var aud = document.getElementsByClassName("game-music")[0];
    if (!this.muted) {
      if (this.playing) {
        this.playing.pause();
      }
      this.playing = aud;
      this.playing.load();
      this.playing.play();
    }
  };

  Audio.prototype.toggleMute = function() {
    this.muted = !this.muted;
    if (this.playing) {
      this.playing.muted = this.muted;
    }
  };

})(this);
