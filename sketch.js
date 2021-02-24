const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
      ground = new Ground();
      stand1 = new Stand(600,300,250,10);

      ball=new Ball(100,200,40,40)
 
      block1 = new Block(510,275,30,40);
      block2 = new Block(540,275,30,40);
      block3 = new Block(570,275,30,40);
      block4 = new Block(600,275,30,40);
      block5 = new Block(630,275,30,40);
      block6 = new Block(660,275,30,40);
      block7 = new Block(690,275,30,40);
      block8 = new Block(540,235,30,40);
      block9 = new Block(570,235,30,40);
      block10 = new Block(600,235,30,40);
      block11 = new Block(630,235,30,40);
      block12 = new Block(660,235,30,40);
      block14 = new Block(570,195,30,40);
      block15 = new Block(600,195,30,40);
      block16 = new Block(630,195,30,40);
      block17=new Block(600,155,30,40)


  slingShot = new Slingshot(ball.body,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  Engine.update(engine);
      ground.display();
      stand1.display();
  strokeWeight(2);
  stroke(15);
  fill("red");
      block1.display();
      block2.display();
      block3.display();
      block4.display();
      block5.display();
      block6.display();
      block7.display();
      fill("yellow")
          block8.display();
      block9.display();
      block10.display();
      block11.display();
      block12.display();
      fill("orange")
      block14.display();
      block15.display();
      block16.display();
      fill("blue")
      block17.display()
fill("green")
      slingShot.display();
      ball.display()
  
}
function mouseDragged(){
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
      slingShot.fly();
}
function keyPressed(){
      if(keyCode === 32){
          slingShot.attach(ball.Body);
      }
}