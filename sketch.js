const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

function preload() {
  dustbinImg = loadImage("dustbin.png");
  paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/1.98,ball_options);
	World.add(world,ball);
	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1240,600,10,120);
    Engine.run(engine);
  
}

function draw() {
	background(200);
	rectMode(CENTER);
	ground.display();
	leftSide.display();  
	rightSide.display();
	
	imageMode(CENTER);
	ellipse(ball.position.x,ball.position.y,radius,radius);
    image(paperImg,ball.position.x,ball.position.y,radius,radius);
	image(dustbinImg,1155,570,200,200);
    
}

function keyPressed() {
  	if (keyDown = UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  	}
    }
