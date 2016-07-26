(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var View = Slader.View = function() {
    this.canvas = document.getElementById("canvas");
    this.width = parseInt(this.canvas.getAttribute("width"));
    this.height = parseInt(this.canvas.getAttribute("height"));
    this.ctx = this.canvas.getContext("2d");
    // this.renderIntroScreen();
  };

  View.prototype.drawInitialPlatform = function(platform) {
    platform.introDraw(this.ctx);
  };

  View.prototype.renderIntroScreen = function() {
    // var canvas = document.getElementById("canvas");
    this.canvas.style.opacity = 0.5;
    // var img = new Image();
    // img.onload = function() {
    //   var canvas = document.getElementById("canvas");
    //   var ctx = canvas.getContext("2d");
    //   ctx.drawImage(img, 0, 0, 800, 400);
    // };
    // img.src = "assets/images/title.png";
  };

  View.prototype.unrenderIntroScreen = function() {
    this.canvas.style.opacity = 1;
    var intro = document.getElementsByClassName("intro-screen")[0];
    intro.style.display = "none";
  };

  View.prototype.renderLevelTransition = function(level) {
    this.canvas.style.opacity = 0.5;
    var imFile = "assets/images/level" + level.toString() + ".png";
    var img = document.getElementsByClassName("level-transition")[0];
    img.src = imFile;
    img.style.display = "block";
  };

  View.prototype.unrenderLevelTransition = function() {
    this.canvas.style.opacity = 1;
    var img = document.getElementsByClassName("level-transition")[0];
    img.style.display = "none";
  };

  View.prototype.renderScoreAndLevel = function() {
    var score = document.getElementsByClassName("score")[0];
    var level = document.getElementsByClassName("level")[0];
    score.style.display = "block";
    level.style.display = "block";
  };

  View.prototype.renderGameOver = function() {
    var img = document.getElementsByClassName("container-img")[0];
    var canvas = document.getElementById("canvas");
    img.style.display = "block";
    canvas.style.opacity = 0.5;
  };

  View.prototype.clearGameOver = function() {
    var img = document.getElementsByClassName("container-img")[0];
    var canvas = document.getElementById("canvas");
    img.style.display = "none";
    canvas.style.opacity = 1;
  };

  View.prototype.levelUp = function() {
    var lev = document.getElementsByClassName("level-num")[0];
    var currLevel = parseInt(lev.innerHTML);
    lev.innerHTML = currLevel + 1;
  };

  View.prototype.resetLevel = function() {
    var lev = document.getElementsByClassName("level-num")[0];
    lev.innerHTML = 0;
  };

  View.prototype.displayScore = function(total) {
    var scr = document.getElementsByClassName("score-num")[0];
    scr.innerHTML = total;
  };

  View.prototype.draw = function(objects) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (var i = 0; i < objects.length; i++) {
      objects[i].draw(this.ctx);
    }
  };

})(this);
