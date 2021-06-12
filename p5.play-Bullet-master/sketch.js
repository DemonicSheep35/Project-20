
var car, wall, speed, weight;




function setup() {
  createCanvas(1800,1000);

  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  
  
  wall = createSprite(1500, 200, 60, height / 2);
  
  //wall.shapeColor = color("white");
  car.velocityX = speed;




}

function draw() {
  
  background(255);  
  
  if(car.width/2 + wall.width/2 > wall.x - car.x){
    var deformation = (0.5*weight*speed*speed)/22500;
    car.velocityX = 0;
    if(deformation < 100){
      car.shapeColor = color("green");
    }
    if(100 < deformation < 180){
      car.shapeColor = color("yellow");
    }
    if(deformation > 180){
      car.shapeColor = color("red");
    }
  }
  drawSprites();
  fill("green");
  stroke("green");
  strokeWeight(100);
  }



