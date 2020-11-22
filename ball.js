class  ball {
    constructor(x,y,width,height,angle){
        var op={
            density:1,
            frictionAir:-0.05

        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
       
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke ("blue");
        fill ("blue");
        ellipse(0,0,this.width,this,height);
        pop ();
    }
}