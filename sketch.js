
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3,trash

function preload()
{
dbi=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
	isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.2

	}
	rect1 = Bodies.rectangle(650,650,200,20,{isStatic:true});
	World.add(world,rect1)
	rect2 = Bodies.rectangle(750,600,20,100,{isStatic:true});
	World.add(world,rect2)
	rect3 = Bodies.rectangle(550,600,20,100,{isStatic:true});
	World.add(world,rect3)

	
	groundSprite= new Ground(width/2, height-35, width,10);
	
	trash= new Trash (150,500,50) 
    Engine.run(engine);
  
}


function draw() {

  background("white");
  rectMode(CENTER)
  rect(rect1.position.x,rect1.position.y,200,10)
rect(rect2.position.x,rect2.position.y,20,100)
rect(rect3.position.x,rect3.position.y,20,100)
  trash.display();
  imageMode(CENTER)
  image(dbi,650,560,240,210)
 

  groundSprite.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-85});
	}
}


