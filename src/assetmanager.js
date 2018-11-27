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
    constructor (){
        this.ImageAssets = [];
        this.SoundAssets = [];
        this.JSONFiles = [];
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
        var mySound = sound;
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
            i.draw();
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

        console.log(`Element: ${id} in array`, myArray);
        return null;
    }

}