
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
  piso = new Pared(200,390, 400,20)
  left = new Pared(10,200,20,400)
  right = new Pared (390,200,20,400)
  ceiling= new Pared(200,10,400,20)
  btn = createButton("arriba")
  btn.position(400,20)
  btn.mouseClicked(up);
  btn2 = createButton("izquierda")
  btn2.position(400,50)
  btn2.mouseClicked(lef);

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
 piso.draw()
 left.draw()
 right.draw()
 ceiling.draw()
 Body.rotate(Remolino, angulo)
 push()
 translate(Remolino.position.x, Remolino.position.y)
 rotate(angulo);
 rect(0,0,125,30)
 pop()
 angulo = angulo+ 0.1
}

function up() {
  Body.applyForce(pelota, {x:0, y:0},{x:0, y:-0.05})

}
function lef() {
  Body.applyForce(pelota, {x:0, y:0},{x:-0.05, y:0})

}