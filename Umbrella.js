class Umbrella{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,0,0,{isStatic: true});
        this.w = 200;
        this.h = 200;
        World.add(world,this.body);
        var BatManimg = loadImage('BatMan.jpg');
        this.BatManimg = BatManimg;
    }

    display(){
        var pos=this.body.position;
        image(this.BatManimg,pos.x,pos.y,this.w,this.h);
    }
}