
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
// hi you there?Please write what we shall create first
//okay
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 580, 800, 10);
	box1 = new Box(500, 580, 50, 50)
	box2 = new Box(500, 530, 50, 50)
	box3 = new Box(500, 470, 50, 50)
	box4 = new Box(500, 420, 50, 50)
	box5 = new Box(500, 370, 50, 50)
	ball = new Ball(350, 350, 20)
	sling = new Slingshot(ball.body, {x:350, y: 250})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display()
  box4.display()
  box5.display()
  ball.display();
  sling.display();
}


function mouseDragged(){

	Matter.Body.setPosition(ball.body,{x:mouseX, y: mouseY})
}
