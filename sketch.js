var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudsgroup
var obstaclesgroup
var cloudImage,cloud
var obImage1,obImage2,obImage3,obImage4,obImage5,obImage6
var count = 0


function preload(){
  trex_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png");
  //trex_collided = loadImage("trex_collided.png");
  
  //groundImage = loadImage("ground2.png");
  cloudImage = loadImage("banana.png");
  obImage1 = loadImage("stone.png");
  
}
function setup() {
  createCanvas(600, 200);
  
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation(trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsgroup = new Group()
  obstaclesgroup = new Group()
}

function draw() {
  background(255);
  
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
   count = count+ Math.round(getFrameRate()/60);
  text("Score: "+ count, 500, 50);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
   cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudsgroup.add(cloud);
  }
  
  
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    obstacle.addImage(obstacle1)
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstaclesgroup.add(obstacle);
  }
}