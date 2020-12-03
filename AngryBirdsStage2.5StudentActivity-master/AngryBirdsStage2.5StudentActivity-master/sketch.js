const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=  Matter.Body
const Constraint=Matter.Constraint
var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground (600,50,600,20);
    ball1=new Box(400,280,40)
    ball2=new Box(480,280,40)
    ball3=new Box(560,280,40)
    ball4=new Box(640,280,40)
    ball5=new Box(720,280,40)
    chain1=new Chain(ball1.body,{x:400,y:50})
    chain2=new Chain(ball2.body,{x:480,y:50})
    chain3=new Chain(ball3.body,{x:560,y:50})
    chain4=new Chain(ball4.body,{x:640,y:50})
    chain5=new Chain(ball5.body,{x:720,y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
}
function keyPressed(){
    if (keyCode === UP_ARROW){
    
        Body.applyForce(ball1.body,ball1.body.position={x:-5,y:-5});
    
    ;
    
    }
    }
