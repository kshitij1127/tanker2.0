//instructions for the project wriiten in comments
// You could have multiple flags like: start, launch to indicate the state of the game.
/*

const {Engine} = Matter 
is the same as const Engine = Matter.Engine

*/
// The above line creates different constant variables for Engine, World, Bodies etc.
// Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
// Remember to update the Matter Engine and set the background.
  // Call the shoot method for the cannon.


/////////////////////////////////////////////////////////////////////////////////////////////////////


const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine,world;
var tanker1,ground1,cannonball1,cannonball2,cannonball3

function setup() {
    createCanvas(1200,400)
    background("blue")
    engine = Engine.create()
    world = engine.world;
    tanker1 = new Tanker(150,315)
    ground1  = new Ground(800,385)
    cannonball1 = new Cannonball(200,50,20,20)
    cannonball2 = new Cannonball(250,50,20,20)
    cannonball3 = new Cannonball(300,50,20,20)
}

function draw() {
Engine.update(engine)
tanker1.display()
ground1.display()
cannonball1.display()
cannonball2.display()
cannonball3.display()
}

function keyReleased() {
 
}