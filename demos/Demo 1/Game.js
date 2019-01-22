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
    this.counter = 0;

    // Create an Asset manager
    this.MyAssetManager = new AssetManager("jsonAssets.json");
    this.MyAssetManager.queueDownloadImage('ASSETS/coin.png');

    // Download images, create images from downloads and draw.
    this.MyAssetManager.downloadAllImages(() => {
      var sprite2 = this.MyAssetManager.getAsset('ASSETS/coin.png');
      var sprite = new MyImage("coin", 200, 200, 788, 219, "mycanvas");
      sprite.load("ASSETS/coin.png");
      this.MyAssetManager.addImageAsset(sprite);

      this.setUp();
    });

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
      // Update Animation
      gameNs.game.MyAssetManager.update();

      if (gameNs.game.counter > 120)
      {
        gameNs.game.coin.setRotation(0);
      }

      if (gameNs.game.counter > 240 )
      {
        gameNs.game.coin.setRotation(1.5708);
        gameNs.game.counter = 0;
      }

      gameNs.game.draw();
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

  /**
   * Game setUp function for when files are finished loading
   * @function setUp
   */
  setUp ()
  {
    // setup sprite image from asset manager
    this.coin = this.MyAssetManager.find(this.MyAssetManager.ImageAssets, "coin");
    // set the sprite as animated
    this.coin.setSpriteSheet(true, 5, 5);
    this.coin.setActive(true);
    this.coin.setRotation(1.5708);
    this.coin.setPos(200, 500);

  }

}