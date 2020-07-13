const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var BatManimg;

var drops = [];

var umbrella;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(50,250);

    Engine.run(engine);
}

function draw(){
    background("gray");
    Engine.update(engine);

    var maxDrops = 5;

    for(var i = 0; i < maxDrops; i++){
        if(frameCount%18===0){
            drops.push(new Drops(random(0,400), 30));
        }
    }
    
    for(var i = 0; i< drops.length; i++){
        drops[i].display();
    }

    umbrella.display();
}   

