/*jshint esversion: 6 */

 /**
 * MySound class
 * @class
 * @classdesc This MySound class initialises audio.
 */
class MySound {

    /**
 * MySound Default Constructor function
 * @constructor Default Constructor
 * @param {String} name, id for audio.
 * @param {String} path, file path to sound location.
 */
    constructor (name, path)
    {
        this.id = name;
        this.sound = document.createElement("audio");
        this.sound.id = name;
        this.isPlaying = false;
        if (navigator.userAgent.search("Chrome")) {
            this.autoPlayWarning();
        }       
        this.sound.preload = "auto";
        //this.sound.autoplay = true;
        this.sound.src = path || "";
        document.body.appendChild(this.sound);
    }

    /**
     * Load The Sound File.
     * Must be called before Play.
     * @param {String} path file path to sound location.
     */
    load(path) {
        if(this.isPlaying != true){
            this.sound.src = path;
        }
        else {
            this.isPlaying = false;
            this.sound.src = path;
        }
    }

    /**
     * Play The Sound.
     */
    play() {
        this.sound.play();
        this.isPlaying = true;
        
    }

    /**
     * Stop The Sound.
     */
    pause() {
        this.sound.pause();
        this.isPlaying = false;
    }

    /**
     * Warning Output
     */
    autoPlayWarning() {
        console.log("Audio Warning: Ensure Google Chrome AutoPlay is enabled ");
    }

    /**
     * Set Volume
     * @param {integer} vol, volume from 0 - 1
     */
    setVolume(vol) {
        var temp = vol;
        if(temp > 1){
            temp = 1;
        }
        this.sound.volume = temp;
    }

}