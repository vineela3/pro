const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options=
  {
    restitution:0.85
  };

  ball=Bodies.circle(200,20,20,ball_options);
  World.add(world,ball);

  var con_options=
  {
    length:100,
    stiffness:0.1,
    pointA:{x:200,y:0},
    pointB:{x:0,y:0},
    bodyB:ball
  };

  con=Matter.Constraint.create(con_options);
  World.add(world,con);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);

  push();
  strokeWeight(4);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  pop();
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
  {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}
