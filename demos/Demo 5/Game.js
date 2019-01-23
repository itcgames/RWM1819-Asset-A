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
    this.MyAssetManager.queueDownloadImage('ASSETS/pic.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic2.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic3.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic4.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic5.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic6.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic7.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic8.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic9.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic10.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic11.png');
    this.MyAssetManager.queueDownloadImage('ASSETS/pic12.png');
    this.MyAssetManager.LoadingBar();
    

    // Download images, create images from downloads and draw.
    this.MyAssetManager.downloadAllImages(() => {

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