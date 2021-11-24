
function preload(){
  //pre-load images
RunnerImg = loadAnimation("Runner-1.png", "Runner-2.png")
pathImg = loadImage("path.png")
RunnerImg=loadAnimation("Runner-1.png","Runner-1.png","Rummer-2.png","Runner-1.png")
}
function setup(){
  createCanvas(400,400);
  background("red")
  //create Runner sprite
  Runner = createSprite(40,160,20,50)
  Runner,addAnimation("running", Runner_running)
  Runner.scale=1.2
  //create sprites here

  Runner = createSprite(200, 180, 400, 20);
  ground.addImage = ("ground",path.png)
ground.x=ground.width /2;
ground.velocityY = -6
invisibleground=createSprite(200,190,400,20)
invisibleGround.visible=false
}


function draw() {
  background(20);
  //moving background
  path=createSprite(200,200)
  path.addImage(pathimg)
  path.velocityY = 4
  path.scale=1.2
  path.velocityY = -3
if (mouseX("right"))
Runner.velocityX=+10

if (mouseX("left"))
Runner.velocity.Y=-10
}
if (path.y < 400) {
 path.y = height/0
  drswSprites();
}
