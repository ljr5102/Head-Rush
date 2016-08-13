(function(root) {

  var Slader = root.Slader = root.Slader || {};

  var View = Slader.View = function() {
    this.canvas = document.getElementById("canvas");
    this.width = parseInt(this.canvas.getAttribute("width"));
    this.height = parseInt(this.canvas.getAttribute("height"));
    this.ctx = this.canvas.getContext("2d");
  };

  function getScoreText(score) {
    if (score < 10) {
      return "Nice Try";
    } else if (score < 20) {
      return "Meh";
    } else if (score < 30) {
      return "Pretty Good";
    } else {
      return "Spectacular!";
    }
  }

  View.prototype.drawInitialPlatform = function(platform) {
    platform.introDraw(this.ctx);
  };

  View.prototype.renderIntroScreen = function() {
    this.canvas.style.opacity = 0.25;
  };

  View.prototype.setStartListener = function(gameStart) {
    var title = document.getElementsByClassName("intro-screen")[0];
    title.addEventListener("click", gameStart);
    this.canvas.addEventListener("click", gameStart);
  };

  View.prototype.setRestartListener = function(gameRestart) {
    var playAgain = document.getElementsByClassName("replay")[0];
    playAgain.addEventListener("click", gameRestart);
  };

  View.prototype.unrenderIntroScreen = function() {
    this.canvas.style.opacity = 1;
    var intro = document.getElementsByClassName("intro-screen")[0];
    intro.style.display = "none";
  };

  View.prototype.renderLevelTransition = function(level) {
    this.canvas.style.opacity = 0.5;
    var imFile = "assets/images/level/level" + level.toString() + ".png";
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

  View.prototype.renderMuteButton = function(audio) {
    var mute = document.getElementsByClassName("mute-section")[0];
    mute.style.display = "block";
    mute.addEventListener("click", audio.toggleMute.bind(audio), false);
    mute.addEventListener("click", this.toggleMute.bind(this), false);
  };

  View.prototype.toggleMute = function() {
    var mute = document.getElementsByClassName("muted-x")[0];
    mute.innerHTML = mute.innerHTML ? "" : "X";
  };

  View.prototype.setSubjectKeyListeners = function(addVel, stopVel) {
    root.addEventListener("keydown", addVel);
    root.addEventListener("keyup", stopVel);
  };

  View.prototype.setSubjectTouchListeners = function(addVel, stopVel) {
    this.canvas.addEventListener("touchstart", addVel);
    this.canvas.addEventListener("touchend", stopVel);
  };

  View.prototype.renderGameOver = function(score) {
    var gameOver = document.getElementsByClassName("container-img")[0];
    var playAgain = document.getElementsByClassName("replay")[0];
    var scoreSec = document.getElementsByClassName("score-section")[0];
    var scoreNum = document.getElementsByClassName("my-score-num")[0];
    var scoreRate = document.getElementsByClassName("score-rating-label")[0];
    var canvas = document.getElementById("canvas");
    gameOver.style.display = "block";
    playAgain.style.display = "block";
    scoreSec.style.display = "block";
    scoreNum.innerHTML = score.toString();
    scoreRate.innerHTML = getScoreText(score);
    canvas.style.opacity = 0.5;
    this.addButtonLinks();
  };

  View.prototype.addButtonLinks = function() {
    var submitButton = document.getElementsByClassName("submit-button")[0];
    submitButton.addEventListener("click", function() {
      var board = document.getElementsByClassName("high-score-board")[0];
      board.style.display = "block";
    }, false);
  };

  View.prototype.clearGameOver = function() {
    var gameOver = document.getElementsByClassName("container-img")[0];
    var playAgain = document.getElementsByClassName("replay")[0];
    var scores = document.getElementsByClassName("score-section")[0];
    var canvas = document.getElementById("canvas");
    gameOver.style.display = "none";
    playAgain.style.display = "none";
    scores.style.display = "none";
    canvas.style.opacity = 1;
  };

  View.prototype.levelUp = function(level) {
    var lev = document.getElementsByClassName("level-num")[0];
    lev.innerHTML = level;
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
