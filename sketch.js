
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var crusedPaper
var ground
var dustbin,


	


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	crushedPaper = new Paper(200,450,70)
	ground = new Ground(width/2,640,width,20)


	dustbin= new Dustbin(1200,650)
	
	var render = Render.create({
		element:document.body,
		engine:engine,
		options : {
			width: 1600,
			height: 700,
			wireframes: false
		  }
		

	})
	
	




	Engine.run(engine);
	Render.run(render);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  crushedPaper.display();
  ground.display();
  dustbin.display();
 

 



  
  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(crushedPaper.body,crushedPaper.body.position,{ x:800, y: -800})

	}
}



