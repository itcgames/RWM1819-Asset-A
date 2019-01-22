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
    constructor (assetspath) {
        this.storedassetspath = assetspath;
        this.successCount = 0;
        this.errorCount = 0;
        this.downloadQueueImages = [];

        this.ImageAssets = [];
        this.SoundAssets = [];

        this.cache = {};

        this.request = new XMLHttpRequest();
        
        this.request.addEventListener("load", function requestListener(AssetManager) {
            var assets = JSON.parse(this.responseText);
            var images = assets.imageList[0];
            var sounds = assets.soundsList[0];

            for (var key in sounds) {
                var value = sounds[key];

                // Create Sound Object.
                // Key = name of sound/id.
                // Value path to sound file.
                var sound = new MySound(key, value);
                // Add sound object to asset manager.
                AssetManager.addSoundAsset(sound);
            }

            for (var key2 in images) {
                var path = images[key2][0];
                var x = images[key2][1];
                var y = images[key2][2];
                var width = images[key2][3];
                var height = images[key2][4];
                var canvas = images[key2][5];
                

                var image = new MyImage(key2, x, y, width, height, canvas);

                image.load(path);
                AssetManager.addImageAsset(image);
            }

        console.log("json loaded");
        }.bind(this.request, this));

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
    addJson() {

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
    find(myArray, id) {
        var temp;
        myArray.forEach(function(i){
            if(i.id === id){
                temp = i;
            }
        });

        if(temp != null) {
            return temp;
        }

        console.log(`Cannot Find Element: ${id} in array`, myArray);
        return null;
    }

     /**
     * Send request to load level
     * @function LoadLevel
     */
    LoadLevel() {
        this.request.open("GET", this.storedassetspath);
        this.request.send();
    }


}

/**
 * Function to add to path to download Queue
 * @function queueDownloadImage
 * @param {String} String, path to download
*/
AssetManager.prototype.queueDownloadImage = function(path) {
    this.downloadQueueImages.push(path);
};


/**
 * Function to download all images paths in the download Queue
 * @function downloadAllImages
 * @param {Callback} Callback, callBack to download.
*/
AssetManager.prototype.downloadAllImages = function(downloadCallback) {
    if (this.downloadQueueImages.length === 0) {
        downloadCallback();
    }
    for (var i = 0; i < this.downloadQueueImages.length; i++) {
      var path = this.downloadQueueImages[i];
      var img = new Image();
      var that = this;

      img.addEventListener("load", function() {
          that.successCount += 1;
          if (that.isDone()) {
            downloadCallback();
        }
      }, false);

      img.addEventListener("error", function() {
          that.errorCount += 1;
          if (that.isDone()) {
            downloadCallback();
        }
      }, false);
      img.src = path;
      this.cache[path] = img;
    }
};


AssetManager.prototype.isDone = function() {
    return (this.downloadQueueImages.length == this.successCount + this.errorCount);
};

AssetManager.prototype.getAsset = function(path) {
    return this.cache[path];
}