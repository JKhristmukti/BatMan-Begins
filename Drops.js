class Drops{
    constructor(x,y){
        var o ={
            friction: 0.1
        }
        
        this.body = Bodies.circle(x,y,5,o);
        this.r1 = 5;
        this.r2 = 5;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        push();
        fill("blue");
        ellipse(pos.x,pos.y,this.r1,this.r2);
        pop();
    }
}