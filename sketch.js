function setup() {
  createCanvas(800,400);

speed = random(55,90);
weight = random(400,1500);

 car = createSprite(400,200,10,10);
car.shapeColor = "red";
car.velocityX = speed; 

wall = createSprite(700,200,15,400);
wall.shapeColor = "black" 

}

function draw() {
  background("yellow");  
  
  if(wall.x - car.x <(car.width + wall.width)/2){
 car.velocityX = 0;
 var deformation = 0.5*weight*speed*speed/22509;

 if(deformation > 180){
   car.shapeColor = "red";
 }


if(deformation<180 && deformation<100){
  car.shapeColor= "yellow";
}

if(deformation<100){
  car.shapeColor = "green";
}
}
  
  
  
 drawSprites();
}