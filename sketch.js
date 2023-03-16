var sea, seaImg1;
var ship, shipImg1;

function preload(){
  seaImg1 = loadAnimation("sea.png"); 
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
 
  sea = createSprite (200,200,400,400);
  sea.addAnimation ("running", seaImg1)
  sea.scale = 0.3
  sea.velocityX= 5

  ship = createSprite (100,200,50,50);
  ship.addAnimation ("running", shipImg1)
  ship.scale = 0.2

}

function draw() {
  background("lightblue");

    if(sea.x < 0){ 
     sea.x = sea.width/2;
    } 

    drawSprites();


}
