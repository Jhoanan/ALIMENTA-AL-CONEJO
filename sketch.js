var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeL, orangeImg;
var redL, redImage;
var grassImg , grass;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  grassImg = loadImage ("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
garden =createSprite(200,200);
garden.addImage(gardenImg);
grass = createSprite (250,340);
grass.addImage (grassImg);
grass.scale = 0.2;
grass = createSprite (190,340);
grass.addImage (grassImg);
grass.scale = 0.2;
grass = createSprite (130,340);
grass.addImage (grassImg);
grass.scale = 0.2;
grass = createSprite (50,340);
grass.addImage (grassImg);
grass.scale = 0.2;
grass = createSprite (20,340);
grass.addImage (grassImg);
grass.scale = 0.2;
grass = createSprite (300,340);
grass.addImage (grassImg);
grass.scale = 0.2;
grass = createSprite (350,340);
grass.addImage (grassImg);
grass.scale = 0.2;
grass = createSprite (400,340);
grass.addImage (grassImg);
grass.scale = 0.2;
grass = createSprite (120,340);
grass.addImage (grassImg);
grass.scale = 0.2;

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples () {
apple = createSprite (random(50,350), 40, 10, 10);
apple.addImage("apple",appleImg);
apple.scale = 0.07;
apple.velocityY = 3;
apple.lifetime= 150;
}
function createOrange (){
orangeL = createSprite (random(50, 350),40, 10,10 )
orangeL.addImage("orangeL",orangeImg);
orangeL.scale =0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}



function createRed (){
redL = createSprite (random(50,350),40,10,10)
redL.addImage("redL",redImg);
redL.scale = 0.06;
redL.velocityY = 3;
redL.lifetime = 150;
}
 



function draw() {
  background(0);

rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,3));

  if (frameCount % 80 == 0) {
   if (select_sprites == 1) {
       createApples();
     }
     else if (select_sprites == 2) {
       createOrange();
     
     } else {
       createRed();
     }
   }
   
  drawSprites();
  
}
