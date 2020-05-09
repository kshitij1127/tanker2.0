class Cannonball{
    constructor(x,y,width,height){
    var options={
        restitution : 1.0,
        friction : 0.3,
        density : 0.5
    }
   
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rect(pos.x,pos.y,this.width,this.height)
        rectMode(CENTER)
    }
}