const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(200,100);

    pink1 = new Pink(400,230);
    pink2 = new Pink(440,230);
    pink3 = new Pink(480,230);
    pink4 = new Pink(520,230);
    pink5 = new Pink(560,230);
    pink6 = new Pink(600,230);
    pink7 = new Pink(900,190);
    pink8 = new Pink(860,190);
    pink9 = new Pink(820,190);
    pink10 = new Pink(940,190);
    pink11 = new Pink(980,190);

    green1 = new Green(420,190);
    green2 = new Green(460,190);
    green3 = new Green(500,150);
    green4 = new Green(540,190);
    green5 = new Green(580,190);
    green6 = new Green(860,150);
    green7 = new Green(860,110);
    green8 = new Green(860,70);
    
    blue1 = new Blue(460,150);
    blue2 = new Blue(540,150);
    blue3 = new Blue(940,150);
    blue4 = new Blue(940,110);
    blue5 = new Blue(940,70);

    
    white1 = new White(500,190);
    white2 = new White(500,110);
    white3 = new White(900,150);
    white4 = new White(900,110);
    white5 = new White(900,70);

    ground1 = new Ground(500,260,260);
    ground2 = new Ground(600,380,1200);
    ground3 = new Ground(900,220,200);



    slingshot = new SlingShot(polygon.body,{x:200,y:100});
}

function draw()
{
    background("black");
    Engine.update(engine);

    polygon.display();
    //pink
    pink1.display();
    pink2.display();
    pink3.display();
    pink4.display();
    pink5.display();
    pink6.display();
    pink7.display();
    pink8.display();
    pink9.display();
    pink10.display();
    pink11.display();
    //green
    green1.display();
    green2.display();
    green3.display();
    green4.display();
    green5.display();
    green6.display();
    green7.display();
    green8.display();
    //white
    white1.display();
    white2.display();
    white3.display();
    white4.display();
    white5.display();
    //blue
    blue1.display();
    blue2.display();
    blue3.display();
    blue4.display();
    blue5.display();


    slingshot.display();
    ground1.display();
    ground2.display();
    ground3.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{ x:mouseX, y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}


function keyPressed()
{
    if(keyCode === 32)
    {
        Matter.Body.setPosition(polygon.body,{x:200,y:100});
        slingshot.attach(polygon.body);
    }
}
























