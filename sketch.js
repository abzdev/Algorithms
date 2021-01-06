var fixedRect, movingRect;
var trex, wall, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  trex = createSprite(100,120,50,50);
  wall = createSprite(450,120,40,10);
  object3 = createSprite(135,352,50,70);
  object4 = createSprite(423,154,80,20);

  trex.shapeColor = "blue";
  wall.shapeColor = "pink";

  trex.velocityX = 2;
  wall.velocityX = -1;

  fixedRect.velocityX = 1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  

  /*
  if(isTouching(trex,wall)) {
    trex.shapeColor = "red";
    wall.shapeColor = "red";

  }
*/
  bounceOff(trex,wall);

  bounceOff(fixedRect, movingRect);

  drawSprites();
}

