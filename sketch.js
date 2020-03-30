const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(800,450);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

holder = Bodies.rectangle(200+200,100,400,10,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220+200,200,25,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.002,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("black");
}


function draw() {
  background("yellow"); 
  Engine.update(engine);


  text("Press space to stop",400,50);
  text("Press any ARROW KEY to start",400,20);

  fill (0);
rectMode(CENTER);
rect(holder.position.x,holder.position.y,400,10);




fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("black");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)




if(keyCode===37||keyCode===38||keyCode===39||keyCode===40){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

if (keyCode === 13){
ball.position.x = 200;

}

}


