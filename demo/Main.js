/*jshint esversion: 6 */

// Dylan Murphy - 2018
// Global Variable
var gameNs = {};

function main()
{
    initCanvas();
    const game = new Game ();
    gameNs.game = game;
    game.init();
    game.update();
}

/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
function initCanvas() {
    var canvas = document.createElement("canvas");
    canvas.id = 'mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
}