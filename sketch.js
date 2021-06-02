const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
  
var bgImage;
var snowday;
var snowgirl;
var snowflakes = [];

function setup() {
  createCanvas(800,600);
  //loading background and character sprite
  snowday = createSprite(460, 400, 50, 50);
  snowgirl = createSprite(640,440,50,50);

  //loading background and character image
  bgImage = loadImage("snow1.jpg");
  girlImage = loadImage("SnowGirl.png");
  snowflake1Img = loadImage("snow4.webp");
  snowflake2Img = loadImage("snow5.webp");

}

function draw() {
  background(255,255,255); 
  
  //creating boundaries
  createEdgeSprites();
  edges=createEdgeSprites();
  snowgirl.collide(edges);

  //adding background image
  snowday.addImage("coldBG",bgImage);
  snowday.scale = 1.8

  //adding character image
  snowgirl.addImage("girl",girlImage);
  snowgirl.scale = 0.3

  //character movement
  if (keyDown("left")){
    snowgirl.x = snowgirl.x-10;
  }
  if (keyDown("right")){
    snowgirl.x = snowgirl.x+10;
  }


  if(frameCount%60===0){
    for(var i=0; i<20; i++){
    snowflakes.push(new Snowing(random(0,800), random(0,600)));
    }
  }


 /* if(frameCount%60===0){
   snowflakes.push(new Snowing(random(width/2-10,width/2+10),10));
  }*/

drawSprites();
}


