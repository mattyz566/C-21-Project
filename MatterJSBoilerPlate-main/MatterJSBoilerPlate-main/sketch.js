var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Matter.Bodies.circle(50,50,50,[5], [1])

	Engine.run(engine);
  var ball_options={
	  isStatic:true,
	  restitution:0.3,
	  friction:0,
	  density:1.2

function keyPressed() {
	if (keyCode === UP_ARROW)

Matter.Body.applyForce(circle,400,10)
}



  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



