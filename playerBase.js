class PlayerBase{
    constructor(x,y,width,height){
        var op={
            isStatic:true
        };
        this.Width=width;
       this.y=y;
       this.x=x;
        this.height=height;
        this.body=Bodies.rectangle(100,200,100,100,op)
        this.image=loadImage("./assets/base1.png")
        World.add(world,this.body);
        
        
    }
    display(){
      
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this,this.height);
        pop();
    }
}