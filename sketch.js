const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var Ball,rope;
function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1500,780,3000,30);
    b1=new box(150,50,20,20);
    b2=new box(170,50,20,20);
    b3=new box(190,50,20,20);
    b4=new box(210,50,20,20);
    b5=new box(160,70,20,20);
    b6=new box(180,70,20,20);
    b7=new box(200,70,20,20);
    b8=new box(170,90,20,20);
    b9=new box(190,90,20,20);
    b10=new box(180,110,20,20);
Ball=new ball(500,150,60,60);
rope=new SlingShot(Ball.body,{x:500,y:20});
}

function draw(){
     background("white");
ground.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
Ball.display();
rope.display();
}

function mouseDragged(){
//    if (gameState!=="launched"){
        Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
 //   }
}


