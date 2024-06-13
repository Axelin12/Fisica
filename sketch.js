
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angulo = 0
let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  pelota = Bodies.circle(200,10,20,{restitution:1.0, frictionAir:0.01})
  World.add(world, pelota);
  piso = Bodies.rectangle(200, 390, 400, 20, {isStatic:true})
  World.add(world, piso);
  Remolino = Bodies.rectangle(200, 200, 125, 30,{isStatic:true})
  World.add(world,Remolino)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
 Engine.update(engine);
 ellipse(pelota.position.x, pelota.position.y, 20);
 rect(piso.position.x, piso.position.y, 400, 20) ;
 Body.rotate(Remolino, angulo)
 push()
 translate(Remolino.position.x, Remolino.position.y)
 rotate(angulo);
 rect(0,0,125,30)
 pop()
 angulo = angulo+ 0.1
}

