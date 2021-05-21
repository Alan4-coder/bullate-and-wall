var bullet;
var thickness,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,40,10)
  
}

function draw() {
  background(0,0,0);  
  bullet.velocityX=speed
 if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
      if(damage>10){
        wall.shapeColor="red";
      }
      if(damage<10){
        wall.shapeColor="green";
      
      }
    }
 
  drawSprites();
}