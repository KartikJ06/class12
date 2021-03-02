const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constarint 

var engine, world; 

function setup(){
    var canvas = createCanvas(1200,400); 
    engine = Engine.create(); 
    world = engine.world;

    ground = new Ground(300,390,2000,10);
    ground2 = new Ground(400,200,400,10); 
    box1 = new Box(250,250,70,70); 

}

function draw(){
    background("purple"); 
    Engine.update(engine); 
    strokeWeight(4); 
    ground.display(); 
    ground2.display(); 

    box1.display(); 
}