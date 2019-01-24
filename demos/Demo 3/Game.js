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
    this.MyAssetManager.LoadLevel();

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
    if(gameNs.game.MyAssetManager.isLoaded === true && gameNs.game.MyAssetManager.isSetUp === false)
    {
      gameNs.game.setUp();
    }

    if(gameNs.game.MyAssetManager.isSetUp === true && gameNs.game.MyAssetManager.isLoaded === true)
    {

      gameNs.game.counter += 1;
      gameNs.game.draw();
      // Update Animation
      gameNs.game.MyAssetManager.update();

      if (gameNs.game.counter > 120 && gameNs.game.BackgroundMusic.isPlaying == true)
      {
        gameNs.game.BackgroundMusic.pause();
        gameNs.game.hit.setVolume(0.1);
        gameNs.game.hit.play();
        gameNs.game.coin.setRotation(0);
        gameNs.game.counter = 0;
      }

      if (gameNs.game.counter > 120 && gameNs.game.BackgroundMusic.isPlaying == false)
      {
        // Play background music.
        gameNs.game.BackgroundMusic.play();
        // Set volume of hit sound.
        gameNs.game.hit.setVolume(1);
        // Play hit sound.
        gameNs.game.hit.play();


        console.log(gameNs.game.hit.sound.volume);
        gameNs.game.coin.setRotation(1.5708);
        gameNs.game.counter = 0;
      }
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


    // Initialise background music from asset manager.
    this.BackgroundMusic = this.MyAssetManager.find(this.MyAssetManager.SoundAssets, "Mo");
    // Initialise hit sound from asset manager.
    this.hit = this.MyAssetManager.find(this.MyAssetManager.SoundAssets, "hit");


    //confirm assets are setup
    gameNs.game.MyAssetManager.isSetUp = true;
  }

}