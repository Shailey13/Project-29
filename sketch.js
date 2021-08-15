const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1;
var wall2;
var bridge;
var jointPoint;
var jointLink;
var stone;
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  wall1 = new Base(0, windowHeight/1.3, windowWidth/4, windowHeight/3);
  wall2 = new Base(windowWidth, windowHeight/1.3, windowWidth/4, windowHeight/3);
  bridge = new Bridge(nLink, pointA);

  for (var i; i<=8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }

  jointPoint = new Base(0, windowHeight/1.3, windowWidth/4, windowHeight/3)
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint)
}

function draw() {
  background(51);



  wall1.display();
  wall2.display();
  bridge.show();
  stone.display();
  

  Engine.update(engine);

}
