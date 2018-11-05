/*jshint esversion: 6 */

/**
 * Game class
 * @class
 * @classdesc This game class initialises the game.
 */
class Game {

  /**
   * Game Default Constructor function
   * @constructor Default Constructor
   * doesnt take in any parameters.
   */
  constructor ()
  {
    this.MyNewImage = new MyImage(100, 100, 788, 219, "mycanvas");
    this.MyNewImage.load("coin.png");
    this.MyNewImage.setSpriteSheet(true, 30, 5);
  }

  /**
   * Game Initialising function
   * @function init
   */
  init ()
  {

  }

  /**
   * Game Update function
   * @function update
   */
  update ()
  {
    gameNs.game.draw();
    gameNs.game.MyNewImage.update();
    window.requestAnimationFrame(gameNs.game.update);
  }

  /**
   * Game Draw function
   * @function update
   */
  draw ()
  {
    var canvas = document.getElementById('mycanvas');
    var square = canvas.getContext('2d');
    square.clearRect(0,0, canvas.width, canvas.height);

    this.MyNewImage.draw();
  }

}