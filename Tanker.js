class Tanker{
    constructor(x,y){
   var options = {
       isStatic : true,
       density : 2.0
   }
  
   this.body = Bodies.rectangle(x,y,100,100,options)
   this.width = 100;
   this.height = 100;

   World.add(world,this.body)
    }
   display() {
        var pos = this.body.position
        rect(pos.x,pos.y,this.width,this.height)
        rectMode(CENTER)
    }
}