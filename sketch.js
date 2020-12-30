const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const MouseConstraint=Matter.MouseConstraint
const Mouse=Matter.Mouse
var bobObject1, bobObject2, bobObject3,bobObject4,bobObject5;
var ground,roof
var rope1, rope2, rope3, rope4,rope5


function preload()
{
	
}

function setup() {
	canvas=createCanvas(800,800);
	engine = Engine.create();
  world = engine.world;
var canvasmouse=Mouse.create(canvas.elt)
canvasmouse.pixelRatio=pixelDensity();
var options={
  mouse: canvasmouse
};
mConstraint=MouseConstraint.create(engine,options);
World.add(world,mConstraint);
   roof= new Ground(800,20,800,20)
   bobD=40
   bobx=400
   boby=700
   bobObject1= new Bob(300,400,bobD,"red")
   bobObject2= new Bob(350,400,bobD,"red")
   bobObject3= new Bob(400,400,bobD,"red")
   bobObject4= new Bob(450,400,bobD,"red")
   bobObject5= new Bob(500,400,bobD,"red")
   rope1=new Sling ( bobObject1.body,roof.body,-bobD*2,0)
   rope2=new Sling ( bobObject2.body,roof.body,-bobD*1,0)
   rope3=new Sling ( bobObject3.body,roof.body,0,0)
   rope4=new Sling ( bobObject4.body,roof.body,bobD*1,0)
   rope5=new Sling ( bobObject5.body,roof.body,bobD*2,0)
   Engine.run(engine)
  }
  
 
  
function draw() {
  background("white")
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


function mouseDragged(){
  Matter.Bodies.setPosition(bobObject5.body,{x:mouseX,y:mouseY})
}
//function mouseReleased(){
//  rope1.fly();
//}