/* global Component1, describe, it, expect, should */

//Tests for my Component
describe('Component1(), Asset Manager: ', function () {
  'use strict';

  // Test to see if Asset manager exists.
  it('Asset Manager', function () {
    expect(AssetManager).to.be.a('function');
  });

  // Create Manager to test.
  var myManager = new AssetManager('../demos/Demo1/jsonAssets.json');

  it('Check if image paths load into asset manager', function () {
    myManager.queueDownloadImage('../demos/Demo 1/ASSETS/coin.png');

    expect(myManager.downloadQueueImages.size, 1);
  });

  // Add Image Asset
  it('Asset Manager add image function', function () {
    expect(myManager.addImageAsset).to.be.a('function');
  });

  // Add sound Asset
  it('Asset Manager add sound function', function () {
    expect(myManager.addSoundAsset).to.be.a('function');
  });

  // Draw Images
  it('Asset Manager draw images function', function () {
    expect(myManager.draw).to.be.a('function');
  });

  // Update
  it('Asset Manager update Assets function', function () {
    expect(myManager.update).to.be.a('function');
  });

  // Find Assets
  it('Asset Manager find Asset function', function () {
    expect(myManager.find).to.be.a('function');
  });


  // Load Level
  it('Asset Manager load level function', function () {
    expect(myManager.LoadLevel).to.be.a('function');
  });

  // Loading Bar
  it('Asset Manager Loading Bar function', function () {
    expect(myManager.LoadingBar).to.be.a('function');
  });

  // Queueing Images
  it('Asset Manager Queueing Images function', function () {
    expect(myManager.queueDownloadImage).to.be.a('function');
  });

  // Download All Images
  it('Asset Manager Download Images function', function () {
    expect(myManager.downloadAllImages).to.be.a('function');
  });

  // Queueing Images
  it('Asset Manager Queueing Sounds function', function () {
    expect(myManager.queueDownloadSound).to.be.a('function');
  });

  // Download All Images
  it('Asset Manager Download Sounds function', function () {
    expect(myManager.downloadAllSounds).to.be.a('function');
  });

  // Queueing Images
  it('Asset Manager Queueing Images function', function () {
    expect(myManager.queueDownloadImage).to.be.a('function');
  });

  // Download is done
  it('Asset Manager is done function', function () {
    expect(myManager.isDone).to.be.a('function');
  });

   // getAsset
   it('Asset Manager get asset function', function () {
    expect(myManager.getAsset).to.be.a('function');
  });

});


describe('Component1(), MyImage: ', function () {
  'use strict';

  // Test to see if MyImage exists.
  it('MyImage', function () {
    expect(MyImage).to.be.a('function');
  });

   // Create MyImage to test.
   var myImage = new MyImage('id', 0,0,0,0, 'canvas');


  // Test draw function.
  it('MyImage draw function', function () {
    expect(myImage.draw).to.be.a('function');
  });

  // Test draw function.
  it('MyImage load function', function () {
    expect(myImage.load).to.be.a('function');
  });

  // Test set position function.
  it('MyImage set position function', function () {
    expect(myImage.setPos).to.be.a('function');
  });

  // Test set Width function.
  it('MyImage set Width function', function () {
    expect(myImage.setWidth).to.be.a('function');
  });

  // Test height function.
  it('MyImage set Height function', function () {
    expect(myImage.setHeight).to.be.a('function');
  });

  // Test update function.
  it('MyImage update function', function () {
    expect(myImage.update).to.be.a('function');
  });

  // Test set SpriteSheet function.
  it('MyImage set SpriteSheet function', function () {
    expect(myImage.setSpriteSheet).to.be.a('function');
  });

  // Test set Active function.
  it('MyImage set Active function', function () {
    expect(myImage.setActive).to.be.a('function');
  });

  // Test set Rotation function.
  it('MyImage set Rotation function', function () {
    expect(myImage.setRotation).to.be.a('function');
  });

});

describe('Component1(), MySound: ', function () {
  'use strict';

  // Test to see if MySound exists.
  it('MySound', function () {
    expect(MySound).to.be.a('function');
  });

  // Create MyImage to test.
  var mySound= new MySound();
 
   // Test MySound load function.
   it('MySound load function', function () {
    expect(mySound.load).to.be.a('function');
  });

  // Test MySound play function.
  it('MySound play function', function () {
    expect(mySound.play).to.be.a('function');
  });

  // Test MySound pause function.
  it('MySound pause function', function () {
    expect(mySound.pause).to.be.a('function');
  });

  // Test MySound auto Play Warning function.
  it('MySound auto Play Warning function', function () {
    expect(mySound.autoPlayWarning).to.be.a('function');
  });

  // Test MySound set Volume function.
  it('MySound set Volume function', function () {
    expect(mySound.setVolume).to.be.a('function');
  });

});