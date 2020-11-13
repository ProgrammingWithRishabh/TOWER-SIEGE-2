const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg;
function preload(){
  bg =loadImage("sprites/bg.png");

}


function setup() {
  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;
  
  rock = new Rock(150, 350, 50, 50);

  ground1 = new Ground(600, 700, width, 20);
  ground4 = new Ground(700, 600, 300, 20);
  ground2 = new Ground(600, 450, 300, 10);
  //ground3 = new Ground(550, 600, 1500, 50,"brown")

  slingshot = new Slingshot(rock.body, {x:150, y: 350});

  // Block level 1
  block1 = new Block1(660, 445, 30, 30);
  block2 = new Block1(640, 445, 30, 30);
  block3 = new Block1(620, 445, 30, 30);
  block4 = new Block1(600, 445, 30, 30);
  block5 = new Block1(580, 445, 30, 30);
  block6 = new Block1(560, 445, 30, 30);
  block7 = new Block1(540, 445, 30, 30);

  // Block level 2
  block8 = new Block2(640, 425, 30, 30);
  block9 = new Block2(620, 425, 30, 30);
  block10 = new Block2(600, 425, 30, 30);
  block11 = new Block2(580, 425, 30, 30);
  block12 = new Block2(560, 425, 30, 30);

  // Block level 3
  block13 = new Block3(620, 405, 30, 30);
  block14 = new Block3(600, 405, 30, 30);
  block15 = new Block3(580, 405, 30, 30);

  // Block level 4
  block16 = new Block4(600, 385, 30, 30);



}

function draw() {
  background(bg);
  Engine.update(engine);

  rock.display();

  ground1.display();
  ground2.display();

  slingshot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(rock.body);
  }
}