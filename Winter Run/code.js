var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6b96620-8d16-4e11-af90-8e5dfb351ffc","7c6096a9-3a48-4646-88c0-afc619df8814","92660ddb-a894-49e9-9720-1b3d84581c39","83a6a388-63cf-4ee0-85ea-1b36cfb5b264","b33dc14b-9831-45e2-b0c4-c176efbd6c3c","db56ad11-6ff6-4be5-981c-7db3bc58f7fb","25ffe9f4-381e-4576-a0c3-5d4ef3e86f2c","9e1436b9-cae7-4a85-8c2a-25017e8cea04","ce8874f7-caeb-4c83-bcd2-c1bbc774efd8","e157c09f-1c8f-4d5c-b5d5-ade713244764","13e1488b-99eb-4847-ac0f-846d1de42d93","eadb5845-2fa3-4294-ae8f-fe7fdaf48d3c","1317eab5-27c9-4c9c-a9a3-b53836780e18","485615ef-3807-4e90-890d-631ad1883267","e5d87b2c-37a0-42f4-87c8-95b5a11f0a19","2b43dc42-fee7-4094-9a04-1b2b01395b83","44b012f6-00b2-4493-9ea4-1c45d4c537f1"],"propsByKey":{"a6b96620-8d16-4e11-af90-8e5dfb351ffc":{"name":"Background","sourceUrl":"assets/v3/animations/6m53_3HkBNwx234AXfnek-uXXDSiOAxxQh_CUk_dSbw/a6b96620-8d16-4e11-af90-8e5dfb351ffc.png","frameSize":{"x":1800,"y":893},"frameCount":1,"looping":true,"frameDelay":4,"version":"he1yAHORKYz6ERfzeWyHcH9fkVnvp_Lu","loadedFromSource":true,"saved":true,"sourceSize":{"x":1800,"y":893},"rootRelativePath":"assets/v3/animations/6m53_3HkBNwx234AXfnek-uXXDSiOAxxQh_CUk_dSbw/a6b96620-8d16-4e11-af90-8e5dfb351ffc.png"},"7c6096a9-3a48-4646-88c0-afc619df8814":{"name":"Santa","sourceUrl":null,"frameSize":{"x":447,"y":565},"frameCount":11,"looping":true,"frameDelay":1,"version":"C3k8c0EOGVbQ5ysYVBKb9rqOBIgXP4MD","loadedFromSource":true,"saved":true,"sourceSize":{"x":1788,"y":1695},"rootRelativePath":"assets/7c6096a9-3a48-4646-88c0-afc619df8814.png"},"92660ddb-a894-49e9-9720-1b3d84581c39":{"name":"ground1","sourceUrl":"assets/v3/animations/6m53_3HkBNwx234AXfnek-uXXDSiOAxxQh_CUk_dSbw/ed71611b-9994-4839-a74f-44ac08fec975.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":1,"version":"kzC4ypNNlF1mypyf_Wxg8t28.bPAV.a2","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/v3/animations/6m53_3HkBNwx234AXfnek-uXXDSiOAxxQh_CUk_dSbw/ed71611b-9994-4839-a74f-44ac08fec975.png"},"83a6a388-63cf-4ee0-85ea-1b36cfb5b264":{"name":"ground","sourceUrl":"assets/v3/animations/6m53_3HkBNwx234AXfnek-uXXDSiOAxxQh_CUk_dSbw/ed71611b-9994-4839-a74f-44ac08fec975.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":1,"version":"kzC4ypNNlF1mypyf_Wxg8t28.bPAV.a2","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/v3/animations/6m53_3HkBNwx234AXfnek-uXXDSiOAxxQh_CUk_dSbw/ed71611b-9994-4839-a74f-44ac08fec975.png"},"b33dc14b-9831-45e2-b0c4-c176efbd6c3c":{"name":"Santa_Idle","sourceUrl":null,"frameSize":{"x":342,"y":544},"frameCount":1,"looping":true,"frameDelay":12,"version":"fwIU88DqOSJ9ZvqpyIQcXSPHPLgGjZKX","loadedFromSource":true,"saved":true,"sourceSize":{"x":342,"y":544},"rootRelativePath":"assets/b33dc14b-9831-45e2-b0c4-c176efbd6c3c.png"},"db56ad11-6ff6-4be5-981c-7db3bc58f7fb":{"name":"start","sourceUrl":null,"frameSize":{"x":146,"y":148},"frameCount":1,"looping":true,"frameDelay":12,"version":"nEb2dgiNTCbD9iY1tv7dcFGDubSRUivr","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":148},"rootRelativePath":"assets/db56ad11-6ff6-4be5-981c-7db3bc58f7fb.png"},"25ffe9f4-381e-4576-a0c3-5d4ef3e86f2c":{"name":"music","sourceUrl":"assets/v3/animations/6m53_3HkBNwx234AXfnek-uXXDSiOAxxQh_CUk_dSbw/25ffe9f4-381e-4576-a0c3-5d4ef3e86f2c.png","frameSize":{"x":146,"y":147},"frameCount":1,"looping":true,"frameDelay":4,"version":"FYbQpIqwYOk1aXcJkEHLCpTAE8dzRYbd","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":147},"rootRelativePath":"assets/v3/animations/6m53_3HkBNwx234AXfnek-uXXDSiOAxxQh_CUk_dSbw/25ffe9f4-381e-4576-a0c3-5d4ef3e86f2c.png"},"9e1436b9-cae7-4a85-8c2a-25017e8cea04":{"name":"pause","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"FnTPN_3catxlN7g7TXeXdUgOPAR5iRca","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/9e1436b9-cae7-4a85-8c2a-25017e8cea04.png"},"ce8874f7-caeb-4c83-bcd2-c1bbc774efd8":{"name":"snow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"twowPHM7u55rHyyL9mrtgCt1h70E.eYT","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ce8874f7-caeb-4c83-bcd2-c1bbc774efd8.png"},"e157c09f-1c8f-4d5c-b5d5-ade713244764":{"name":"coin","sourceUrl":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75","loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png"},"13e1488b-99eb-4847-ac0f-846d1de42d93":{"name":"obstacle1","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"_ofevToV4PkpOAPmpEbgq8Weh2mhM5fj","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/13e1488b-99eb-4847-ac0f-846d1de42d93.png"},"eadb5845-2fa3-4294-ae8f-fe7fdaf48d3c":{"name":"dead","sourceUrl":null,"frameSize":{"x":934,"y":641},"frameCount":28,"looping":true,"frameDelay":3,"version":"GQhUahCbFEXnLqRPUNZiVcuV.s2d5QbL","loadedFromSource":true,"saved":true,"sourceSize":{"x":3736,"y":3846},"rootRelativePath":"assets/eadb5845-2fa3-4294-ae8f-fe7fdaf48d3c.png"},"1317eab5-27c9-4c9c-a9a3-b53836780e18":{"name":"obstacle2","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"vNOqldA4HUvF0TRnOngOKUFglV9Y8ZHr","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/1317eab5-27c9-4c9c-a9a3-b53836780e18.png"},"485615ef-3807-4e90-890d-631ad1883267":{"name":"obstacle3","sourceUrl":null,"frameSize":{"x":80,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"Zd.A45Ou9aZxhm5eEGE7x1qvXdS9JCk5","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":150},"rootRelativePath":"assets/485615ef-3807-4e90-890d-631ad1883267.png"},"e5d87b2c-37a0-42f4-87c8-95b5a11f0a19":{"name":"obstacle4","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"xxJYH4VwNaUg2DAjmJW53hsczLtXPDjX","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/e5d87b2c-37a0-42f4-87c8-95b5a11f0a19.png"},"2b43dc42-fee7-4094-9a04-1b2b01395b83":{"name":"obstacle5","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":4,"looping":true,"frameDelay":12,"version":"0BwRmNsL99FIvsdijyBRACPFkJBk414d","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/2b43dc42-fee7-4094-9a04-1b2b01395b83.png"},"44b012f6-00b2-4493-9ea4-1c45d4c537f1":{"name":"obstacle6","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"nKhikY50DQUYTR2kwKX6U_EIHP.11gQi","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/44b012f6-00b2-4493-9ea4-1c45d4c537f1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create a background
var background1 = createSprite(200, 200, 400, 400);
background1.setAnimation("Background");
background1.scale = 0.5;

//create player sprite
var player = createSprite(50, 335.125, 20, 10);
player.setAnimation("Santa");
player.scale = 0.15;

//create a ground sprite
var GroundGroup = createGroup();
for (var i = 0; i < 8; i = i + 1) {
var ground = createSprite(i*60, 400, 20, 10);
ground.setAnimation("ground");
ground.scale = 0.5;
GroundGroup.add(ground);
}

var invisibleGround = createSprite(200, 380, 400, 5);
invisibleGround.visible = false;

//add start button
var startButton = createSprite(190, 200, 10, 20);
startButton.setAnimation("start");
startButton.visible = false;
startButton.scale = 0.5;

//add score sprite
var score = 0;

//make groups for coins and obstacles
var CoinGroup = createGroup();
var ObstaclesGroup = createGroup();
var GroundGroup1 = createGroup();

//add gameStates
var start = 0;
var play = 1;
var end = 2;
var gameState = start;
var pause = createSprite(340, 40);
pause.setAnimation("pause");

 function draw() {
  background(255);
  player.collide(invisibleGround);
  snowfall();
  //add gravity
  player.velocityY = player.velocityY + 1;
  
   if(gameState === start) {
    
    startButton.visible = true;
    
    score = score*0;
    
    player.setAnimation("Santa_Idle");
    
    background1.x = 200;
    
    background1.velocityX = 0;
    
    ObstaclesGroup.setVisibleEach(false);
    
    CoinGroup.setVisibleEach(false);
    
    GroundGroup.setVelocityXEach(0);
    
    GroundGroup.setLifetimeEach(1000);
    
    ObstaclesGroup.setLifetimeEach(1);
    
    CoinGroup.setLifetimeEach(1);
  }
    
    if (mousePressedOver(startButton) && gameState === start) {
      gameState = play;
    }
  
  if (gameState === play) {
    startButton.visible = false;
    
    GroundGroup.setVelocityXEach(-9);
    groundSprite();
    GroundGroup1.setVelocityXEach(-9);
    if (score === score + 50) {
      GroundGroup1.setVelocityXEach = GroundGroup1.setVelocityXEach + 3; 
    }
    
    
    player.setAnimation("Santa");
    
    //make the background move and endless
    background1.velocityX = -6;
    if (background1.x < 0 ) {
     background1.x = 440;
    }
    
    //to make the player jump
    if (keyWentDown("space") && player.y === 335.125) {
      player.velocityY = -15;
    }
    
    coins();
    CoinGroup.x = (400);
    if (CoinGroup.isTouching(player)) {
      score = score + 1;
      CoinGroup.setLifetimeEach(1);
    }
    
    obstacles();
    if (ObstaclesGroup.isTouching(player)) {
      gameState = end;
    }
  }
  
  if (gameState === end) {
    GroundGroup.setVelocityXEach(0);
    GroundGroup1.setVelocityXEach(0);
    GroundGroup1.setLifetimeEach(1000);
    background1.velocityX = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CoinGroup.setVelocityXEach(0);
    player.setAnimation("dead");
    if (keyWentDown("space") && player.y === 335.125) {
      player.velocityY = -15;
    }
    player.velocityY = player.velocityY + 4;
    ObstaclesGroup.setLifetimeEach(1000);
    CoinGroup.setLifetimeEach(1000);
  }
  
  drawSprites();
  fill("gold");
  textFont("Alergian");
  textSize(23);
  text("Score:" + score, 20, 20);
  
  if (gameState === end) {
    textSize(40);
    text("Press Enter to Restart", 10, 200);
  }
  
  if (gameState === end && keyDown("enter")) {
    gameState = start;
  }
  if (mousePressedOver(pause)) {
    gameState = start;
    GroundGroup.setVelocityXEach(0);
    GroundGroup1.setVelocityXEach(0);
    GroundGroup1.setLifetimeEach(1000);
    background1.velocityX = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CoinGroup.setVelocityXEach(0);
    player.setAnimation("dead");
  }
}

function coins() {
  if (World.frameCount%50 === 0) {
    var coin = createSprite(400, 330, 10, 10);
    coin.y = randomNumber(200, 300);
    coin.setAnimation("coin");
    coin.scale = 0.5;
    coin.velocityX = -9;
    coin.lifetime = 50;
    coin.depth = player.depth - 1;
    CoinGroup.add(coin);
  }
}

function obstacles() {
  if (World.frameCount%35 === 0) {
    var obstacles = createSprite(400, 350, 10, 10);
    obstacles.collide(invisibleGround);
    var r = randomNumber(1, 6);
    obstacles.setAnimation("obstacle"+r);
    obstacles.scale = 0.5;
    obstacles.lifetime = 50;
    obstacles.velocityX = -9;
    obstacles.depth = player.depth - 1;
    ObstaclesGroup.add(obstacles);
    
  }
}

function groundSprite() {
  if (World.frameCount%7 === 0) {
   var ground1 = createSprite(420, 400, 20, 10);
   ground1.setAnimation("ground1");
   ground1.scale = 0.5;
   ground1.velocityX = -9;
   ground1.lifetime = 50;
   GroundGroup1.add(ground1);
  } 
}


function snowfall() {
  if (World.frameCount%10 === 0) {
     var snowfall = createSprite(10, 0, 10, 10); 
     snowfall.velocityY = +4;
     snowfall.x = randomNumber(1,400);
     snowfall.setAnimation("snow");
     snowfall.scale = 0.10;
     snowfall.depth = 1;
     snowfall.lifetime = 90;
    }
    GroundGroup.setDepthEach(2);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
