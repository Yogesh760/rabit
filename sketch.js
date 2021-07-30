var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var leafImg;
var orangeImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeImg=loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
//creating boy running

function draw() {
  
  background(0);
  edges= createEdgeSprites();
apples()
leafs()
olefs()
rabbit.x=mouseX
  rabbit.collide(edges);
  drawSprites();
}
function apples(){
  if(frameCount%60==0){
apple = createSprite(180,3,10,10);
apple.scale =0.05;
apple.addImage(appleImg);
apple.velocityY=+4
apple.x=random(50,350)
}
}
function leafs(){
  if(frameCount%60==0){
leaf = createSprite(180,3,10,10);
leaf.scale =0.05;
leaf.addImage(leafImg);
leaf.velocityY=+4
leaf.x=random(50,350)
}
}
function olefs(){
  if(frameCount%80==0){
    orange=createSprite(180,3,10,10);
    orange.scale=0.05;
    orange.addImage(orangeImg);
    orange.velocityY=+4
    orange.x=random(50,350)
  }
  }
