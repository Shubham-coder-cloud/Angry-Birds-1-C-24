   //Namespacing
   
   const Engine =  Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;

var ground,box1,box2,box3,box4;
var engine,world;
var pig1 , pig2;
var log1 , log2;
var bird;
var log3,lo4,box5;




function setup() {
  createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

ground = new Ground(600,390,1200,20);
box1 = new Box(700,320,50,50);
box2 = new Box(920,320,50,50);
pig1 = new Pig(810,350);
log1 = new Log(810,260,100,PI/2) ;

box3 = new Box(700,240,50,50);
box4 = new Box(920,240,50,50);
pig2 = new Pig(810,220);
log2 = new Log(810,180,100,PI/2);



bird = new Bird(100,100)
log3 = new Log(760,120,150,PI/7);
log4 = new Log(870,120,150,-PI/7);
box5 = new Box(810,160,50,50);


}


function draw() {
  background("black"); 
  
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  log2.display();
  pig2.display();

  bird.display();
  log3.display();
  log4.display();
  box5.display();
}