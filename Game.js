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
    // Initialise your Image Asset giving, x & y position, width, height, canvas name it will be drawn on
    this.MyNewImage = new MyImage(window.innerWidth / 3, window.innerHeight / 3, 788, 219, "mycanvas");
    // Load your image from path.
    this.MyNewImage.load("coin.png");
    // Set your Image to be animated giving, a loop bool, the speed it will change, how many frames in image.
    this.MyNewImage.setSpriteSheet(true, 5, 5);
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
    // Update Animation
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

    // Draw Image / Animation.
    this.MyNewImage.draw();
  }

}