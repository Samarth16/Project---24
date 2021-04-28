
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

  ground = new Ground(400,695,800,10);
  hammer = new Hammer(400,10,80,100);
  stone = new Stone(100,300,60,60);
  rubber = new Rubber(700,20,40,20);
  iron = new Iron(300,40,90,20);
  sand1 = new Sand1(600,20,10,10);
  sand2 = new Sand2(590,20,10,10);
  sand3 = new Sand3(585,20,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine);


  textSize(20);
  fill("black")
  text("Brown : Hammer",10,20);
  text("White : Rubber",10,40);
  text("Red : Stone",10,60);
  text("Gray : Iron",10,80);
  text("Gold : Sand",10,100);
  

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();


  drawSprites();
 
}



