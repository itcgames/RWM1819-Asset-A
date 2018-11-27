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
    this.MyNewImage = new MyImage("coin", window.innerWidth / 3, window.innerHeight / 3, 788, 219, "mycanvas");
    // Load your image from path.
    this.MyNewImage.load("ASSETS//coin.png");
    // Set your Image to be animated giving, a loop bool, the speed it will change, how many frames in image.
    this.MyNewImage.setSpriteSheet(true, 5, 5);

    this.BackgroundMusic = new MySound("MO", "ASSETS//Mo Bamba.mp3");

    this.counter = 0;

    // Create an Asset manager
    this.MyAssetManager = new AssetManager();
    // Add Images to the manager
    this.MyAssetManager.addImageAsset(this.MyNewImage);
    this.MyAssetManager.find(this.MyAssetManager.ImageAssets, "coin");

    // store image passed by reference from assset manager
    this.image1 = this.MyAssetManager.find(this.MyAssetManager.ImageAssets, "coin");
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
    gameNs.game.counter += 1;
    gameNs.game.draw();
    // Update Animation
    gameNs.game.MyAssetManager.update();

    if (gameNs.game.counter > 240 && gameNs.game.BackgroundMusic.isPlaying == true)
    {
      gameNs.game.BackgroundMusic.pause();
      gameNs.game.counter = 0;
    }

    if (gameNs.game.counter > 240 && gameNs.game.BackgroundMusic.isPlaying == false)
    {
      gameNs.game.BackgroundMusic.play();
      gameNs.game.counter = 0;
    }

    console.log(gameNs.game.counter);
    window.requestAnimationFrame(gameNs.game.update);
  }

  /**
   * Game Draw function
   * @function draw
   */
  draw ()
  {
    var canvas = document.getElementById('mycanvas');
    var square = canvas.getContext('2d');
    square.clearRect(0,0, canvas.width, canvas.height);

      // Use asset manager to draw
      this.MyAssetManager.draw();
  }

}