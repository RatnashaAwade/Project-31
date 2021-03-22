const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(200,200,20,20);
}

function draw() {
  background(255,255,255); 
  
  ground.display();

   drawSprites();
}