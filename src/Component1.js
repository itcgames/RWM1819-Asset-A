/*jshint esversion: 6 */
/**
 * function to create an image object given the co-ordinates and size
 * @param {Integer} x x position.
 * @param {Integer} y y position.
 * @param {Integer} width width of the image.
 * @param {Integer} height height of the Image.
 * @param {String} canvasName name of canvas to be drawn on.
 */
class MyImage {

    constructor (x, y, width, height, canvasName)
    {
        MyImage.pic = new Image(width, height);
        MyImage.x = x;
        MyImage.y = y;
        MyImage.width = width;
        MyImage.height = height;
        MyImage.canvasName = canvasName;

        MyImage.spriteSheet = false;
        MyImage.frameIndex = 0;
        MyImage.tickCount = 0;
        MyImage.ticksPerFrame = 0;
        MyImage.numberPerFrame = 1;
        MyImage.loop = true;
    }

    /**
     * Draw function for the Image.
     */
    draw() {
        var canvas = document.getElementById(MyImage.canvasName);
        var square = canvas.getContext('2d');
         if(!MyImage.spriteSheet){
            square.drawImage(MyImage.pic, MyImage.x, MyImage.y, MyImage.width, MyImage.height);
         }
         else{
            square.drawImage(
                MyImage.pic,
                MyImage.frameIndex * MyImage.width / MyImage.numberPerFrame,
                0,
                MyImage.width / MyImage.numberPerFrame,
                MyImage.height,
                MyImage.x,
                MyImage.y,
                MyImage.width / MyImage.numberPerFrame ,
                MyImage.height);
         }
    }

    /**
     * Load The Image.
     * Must be called before draw.
     */
    load(path) {
        MyImage.pic.src = path;
    }

    /**
     * Change Position
     */
    setPos(x, y) {
        MyImage.x = x;
        MyImage.y = y;
    }

    /**
     * Change width.
     */
    setWidth(width) {
        MyImage.width = width;
    }

    /**
     * Change height.
     */
    setHeight(height) {
        MyImage.height = height;
    }

    /**
     * update Animation.
     */
    update() {
        MyImage.tickCount += 1;

        if(MyImage.tickCount > MyImage.ticksPerFrame)
        {
            MyImage.tickCount = 0;

            if( MyImage.frameIndex < MyImage.numberPerFrame -1)
            {
                MyImage.frameIndex += 1 ;
            }
            else if ( MyImage.loop)
            {
                MyImage.frameIndex = 0;
            }
        }
    }

    /**
     * set Sprite sheet function for animations. 
     */
    setSpriteSheet(spritesheet, ticksperframe, numberperframe ) {
        MyImage.spriteSheet = spritesheet;
        MyImage.frameIndex = 0;
        MyImage.tickCount = 0;
        MyImage.ticksPerFrame = ticksperframe;
        MyImage.numberPerFrame = numberperframe;
    }

}