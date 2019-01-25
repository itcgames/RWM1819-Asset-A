/*jshint esversion: 6 */

/**
 * MyImage class
 * @class
 * @classdesc This MyImage class initialises Images.
 */
class MyImage {

    /**
 * function to create an image object given the co-ordinates and size
 * @constructor Image Consructor function
 * @param {Integer} x x position.
 * @param {Integer} y y position.
 * @param {Integer} width width of the image.
 * @param {Integer} height height of the Image.
 * @param {String} canvasName name of canvas to be drawn on.
 */
    constructor (id, x, y, width, height, canvasName)
    {
        this.id = id;
        this.pic = new Image(width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvasName = canvasName;

        this.spriteSheet = false;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 0;
        this.numberPerFrame = 1;
        this.loop = true;
        this.active = false;
        this.rotate = 0;
    }

    /**
     * Draw function for the Image.
     */
    draw() {
        var canvas = document.getElementById(this.canvasName);
        var square = canvas.getContext('2d');

        square.save(); 
        
         if(!this.spriteSheet){
            square.translate(this.x + (this.width / 2), this.y + (this.height / 2));
            square.rotate(this.rotate);
            square.translate((this.x + (this.width / 2)) * -1, (this.y + (this.height / 2)) * -1);

            square.drawImage(this.pic, this.x, this.y, this.width, this.height);
         }
         else{
            square.translate(this.x + ((this.width / this.numberPerFrame) / 2), this.y + (this.height / 2));
            square.rotate(this.rotate);
            square.translate((this.x + ((this.width / this.numberPerFrame) / 2)) * -1, (this.y + (this.height / 2)) * -1);

            square.drawImage(
                this.pic,
                this.frameIndex * this.width / this.numberPerFrame,
                0,
                this.width / this.numberPerFrame,
                this.height,
                this.x,
                this.y,
                this.width / this.numberPerFrame ,
                this.height);
         }

         square.restore(); 
    }

    /**
     * Load The Image.
     * Must be called before draw.
     * @param {String} path file path to image location.
     */
    load(path) {
        this.pic.src = path;
    }

    /**
     * Change Position
     */
    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Change width.
     */
    setWidth(width) {
        this.width = width;
    }

    /**
     * Change height.
     */
    setHeight(height) {
        this.height = height;
    }

    /**
     * update Animation.
     */
    update() {

        if(this.spriteSheet == true){
            this.tickCount += 1;

            if(this.tickCount > this.ticksPerFrame)
            {
                this.tickCount = 0;

                if( this.frameIndex < this.numberPerFrame -1)
                {
                    this.frameIndex += 1 ;
                }
                else if ( this.loop)
                {
                    this.frameIndex = 0;
                }
            }
        }
    }

    /**
     * set Sprite sheet function for animations. 
     */
    setSpriteSheet(spritesheet, ticksperframe, numberperframe ) {
        this.spriteSheet = spritesheet;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = ticksperframe;
        this.numberPerFrame = numberperframe;
    }

     /**
     * set active. 
     */
    setActive(isActive) {
        this.active = isActive;
    }

    /**
     * set rotation. 
     */
    setRotation(rads) {
        this.rotate = rads;
    }

}