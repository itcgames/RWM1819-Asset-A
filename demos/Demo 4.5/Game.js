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
    // Create an Asset manager
    this.MyAssetManager = new AssetManager("jsonAssets.json");

    //this.MyAssetManager.queueDownloadImage('ASSETS/pic.png');
    //this.MyAssetManager.queueDownloadImage('ASSETS/coin.png');

    //this.MyAssetManager.downloadAllImages(() => {
    //  var sprite = this.MyAssetManager.getAsset('ASSETS/pic.png');
    //  var sprite2 = this.MyAssetManager.getAsset('ASSETS/coin.png');

    //  var canvas = document.getElementById('mycanvas');
    //  var square = canvas.getContext('2d');
    //  square.drawImage(sprite, 500 - sprite.width/2, 500 - sprite.height/2);
    //  square.drawImage(sprite2, 500 - sprite2.width/2, 500 - sprite2.height/2);
   // });

    //Load level
    this.MyAssetManager.LoadLevel();
    // Draw
    this.coin = this.MyAssetManager.find(this.MyAssetManager.ImageAssets, "pic");
    this.coin.setActive(true);
    this.MyAssetManager.draw();
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
      gameNs.game.MyAssetManager.draw();
      console.log(gameNs.game.MyAssetManager);
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
    
  }

  /**
   * Game setUp function for when files are finished loading
   * @function setUp
   */
  setUp ()
  {

  }

}