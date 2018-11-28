/*jshint esversion: 6 */

/**
 * AssetManager class
 * @class
 * @classdesc This AssetManager class initialises the AssetManager.
 */
class AssetManager {

    /**
   * AssetManager Default Constructor function
   * @constructor Default Constructor
   * doesnt take in any parameters.
   */
    constructor (assetspath){
        this.ImageAssets = [];
        this.SoundAssets = [];
        this.isLoaded = false;
        this.isSetUp = false;

        var request = new XMLHttpRequest();
        request.addEventListener("load", function requestListener(){
        this.assets = JSON.parse(this.responseText);
        this.images = this.assets.imageList[0];
        this.sounds = this.assets.soundsList[0];

        for (var key in this.sounds){
            var value = this.sounds[key];
            var sound = new MySound(key, value);
            gameNs.game.MyAssetManager.addSoundAsset(sound);
        }

        for (var key2 in this.images){
            var path = this.images[key2][0];
            var x = this.images[key2][1];
            var y = this.images[key2][2];
            var width = this.images[key2][3];
            var height = this.images[key2][4];
            var canvas = this.images[key2][5];

            var image = new MyImage(key2, x, y, width, height, canvas);
            image.load(path);
            gameNs.game.MyAssetManager.addImageAsset(image);
        }

        gameNs.game.MyAssetManager.isLoaded = true;
        console.log("json load");
        });

        request.open("GET", assetspath);
        request.send();
    }

    /**
     * Function to add to list of Image assets
     * Function to add an Image to the array of Image Assets to be managed
     * @function addImageAsset
     * @param {Image} Image, Image file to be added to array
     */
    addImageAsset(Image) {
        var myImage = Image;
        this.ImageAssets.push(myImage);
    }

    /**
     * Function to add to list of sound assets
     * @function addSoundAsset
     * @param {sound} sound, sound file to be added to array
     */
    addSoundAsset(Sound) {
        var mySound = Sound;
        this.SoundAssets.push(mySound);
    }

    /**
     * Function to add a JSON Path
     * @function addjson
     */
    addJson(){

    }

    /**
     * Draw function for the Assets.
    * @function draw
     */
    draw() {
        this.ImageAssets.forEach(function(i) {
            if(i.active === true){
                i.draw();
            }
        });
    }

   
    /**
     * update Assets
    * @function update
     */
    update() {
        this.ImageAssets.forEach(function(i) {
            if(i.spriteSheet === true){
                i.update();
            }
        });
    }

    /**
     * Loop throiugh array to find target to return, passed out ny reference
     * @function find
     * @param {array} myArray, target array to loop through
     * @param {string} id value of the target
     */
    find(myArray, id){
        var temp;
        myArray.forEach(function(i){
            if(i.id === id){
                temp = i;
            }
        });

        if(temp != null){
            return temp;
        }

        console.log(`Cannot Find Element: ${id} in array`, myArray);
        return null;
    }

}