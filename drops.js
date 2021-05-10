class Drops{

    constructor(x,y){

        var options={
            restitution:1,
            friction:0.1,
            density:0.2
        }

        this.rain=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.body);

    }

    display(){

        var pos=this.body.position;

        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius);
        pop();
    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }

}