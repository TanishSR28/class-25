
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground;
var b1,b2,b3,b4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill("red")
	paper1 = new Paper(60,670);
	ground = new Ground(width/2,680,width,10);
	
	fill("red")
	// b4 = new Box((width)/2+200,height-125,220,200);
	b1 = new Box((width/2)+200,height-35,200,20);
	b2 = new Box((width/2)+120,height-120,20,200);
	b3 = new Box((width/2)+280,height-120,20,200);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
//   b4.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65});
	}
}


