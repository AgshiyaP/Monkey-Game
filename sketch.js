
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1

  ground = createSprite(80,195,600,20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
 

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  monkey.setCollider
  ("rectangle",0,0,monkey.width,monkey.height);
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup(); 
   
  
  score = 0;
}


function draw() {
  background ("green");
  
   
  
   stroke ("white");
  textSize(20);
  fill("white");
  text("Score:" + score,490,50);
  
  stroke ("black");
   textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime, 20, 50)
  
  
     if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
 // console.log(monkey.y)
   if(keyDown("space")&& monkey.y >= 161) {
     monkey.velocityY = -20;
     
    }
  
   spawnfood();
  // Whenever I put in spawnObstacles() it says that it's not defined. What do I do?
    
    monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(invisibleGround);
 
  
    drawSprites();

}

function spawnfood() {

  if (frameCount % 80 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(bananaImage);
    food.scale = 0.1 ;
    food.velocityX = -4;
    
     
    food.lifetime = 200;
    
  
    food.depth = monkey.depth;
    food.depth = monkey.depth + 1;
    
  
    FoodGroup.add(food);
  }
  
function spawnObstacles() { 
  
   if (frameCount % 300 === 0) {
    var stone = createSprite(600,120,40,10);
    stone.y = Math.round(random(80,120));
    stone.addImage(obstaceImage);
    stone.scale = 0.5 ;
    stone.velocityX = -3;
    
     
    stone.lifetime = 300;
     
 
    obstacleGroup.add(stone);

}
 
}
}