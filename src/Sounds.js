/*jshint esversion: 6 */
/**
 * function to create a sound object .
 * @param {String} name id for audio.
 * @param {String} path file path to sound location.
 */
class MySound {

    constructor (name, path)
    {
        
        this.sound = document.createElement("audio");
        this.sound.id = name;
        this.isPlaying = false;
        if (navigator.userAgent.search("Chrome")) {
            this.autoPlayWarning();
        }       
        this.sound.preload = "auto";
        this.sound.autoplay = true;
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


}