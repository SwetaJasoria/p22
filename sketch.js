const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//create helicopter
	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	//create package
	packageBody = Bodies.rectangle(width/2 , 200 , 40 , 40, {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() 
{
  background(0);

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 10);

  imageMode(CENTER);
  image(packageIMG, packageBody.position.x, packageBody.position.y, 40, 40); 

  drawSprites();
}

function keyPressed() 
{
//  if (keyCode === DOWN_ARROW) {

//  }
	
	if(keyDown("down"))
	{
		Body.setStatic(packageBody, false);
	}
}



