var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,50,50)
  bullet.velocityX=3;
  wall=createSprite(1200,200,thickness,height/2)
  
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bulletwidth;
  wallLeftEdge=wall.x;
  if(bulletRightEdge=wallLeftEdge)
{
  return true
}
 return false;
}

function draw() {
  background(255,255,255);
  drawSprites(); 

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10)
  {

    wall.shapeColor(0,255,0);
  }
}











}
  
 