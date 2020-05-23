var moving_rect,fixed_rect;


function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(400, 200, 50, 50);
 fixed_rect.shapeColor = "red";
moving_rect = createSprite(400,200,50,50);
moving_rect.shapeColor = "red";
}

function draw() {
  background("grey");  
 
 moving_rect.x = mouseX;
 moving_rect.y = mouseY;
 
 if (moving_rect.x - fixed_rect.x <= (moving_rect.width/2 + fixed_rect.width/2) &&
 fixed_rect.x - moving_rect.x <= (moving_rect.width/2 + fixed_rect.width/2) &&
 moving_rect.y - fixed_rect.y <= (moving_rect.height/2 + fixed_rect.height/2) &&
 fixed_rect.y - moving_rect.y <= (moving_rect.height/2 + fixed_rect.height/2)) {
fixed_rect.shapeColor = "yellow";
 moving_rect.shapeColor = "yellow";
 }
 
 else
 {
   fixed_rect.shapeColor = "red";
   moving_rect.shapeColor = "red";
 }
 




  drawSprites();
}