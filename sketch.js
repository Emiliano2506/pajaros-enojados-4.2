//Variables Globales 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
let engine;
let world;
var fondo = "./Imagenes/bg.png";
var fondo_img;
var pisoooo, pisoimg;
var bace, baceDeLaBace;
var caja, caja1, caja2, caja3, caja4;
var palitos, palitos1, palitos2, palitos3, palitos4;
var chancho,chancho1,chancho2;
var resortera, resortera2;
var pajaro;
var puntos=0;
var estadoDelPajaro=1

function preload(){
    fondo_img = loadImage(fondo);
    pisoimg = loadImage("./Imagenes/ground.png");
}
function setup(){
    createCanvas(750,540);
    engine = Engine.create()
    world = engine.world;
    bace = new Piso(100,472,200,200);
    pisoooo =new Piso(300,608,950,250);
    caja = new Boxhija(654,260,50,50);
    caja1 = new Boxhija(576,260,50,50);
    caja2 = new Boxhija(616,328,50,50);
    caja3 = new Boxhija(689,328,50,50);
    caja4 = new Boxhija(570,328,50,50);
    palitos = new Palitoshijos(615,295,20,200,PI/2);
    palitos1 = new Palitoshijos(615,363,20,200,1.57);
    palitos2 = new Palitoshijos(580,421,20,108,0);
    palitos3 = new Palitoshijos(670,421,20,107,0);
    palitos4 = new Palitoshijos(615,226,20,129,PI/2);
    chancho = new Chancho(615,328,30,30);
    chancho1 = new Chancho(654,328,25,25);
    chancho2 = new Chancho(616,260,25,25);
    pajaro = new Red(110,425);
    resortera = new Resortera(pajaro.body,{x:55,y:94});
    //resortera = new Resortera(70,330,55,94);
}
function draw(){
    //if(fondo)
    background(fondo_img);
    text("pajaros enojados",40,70);
    textSize(35);
    fill("white");
    text("puntuacion:"+puntos,450,70);
    pisoooo.display();
    bace.display();
    Engine.update(engine);
    caja.display();
    caja1.display();
    caja2.display();
    caja3.display();
    caja4.display();
    palitos.display();
    palitos1.display();
    palitos2.display();
    palitos3.display();
    palitos4.display();
    chancho.display();
    chancho1.display();
    chancho2.display();
    pajaro.display();
    resortera.display();
    console.log(pajaro.body.speed);
}
function mouseDragged(){
    Matter.Body.setPosition(pajaro.body,{x:mouseX,y:mouseY});
    console.log("entro a funcion dragge");
}
function mouseReleased(){
    resortera.fly();
    estadoDelPajaro=0;
}
function keyPressed(){
    if(keyCode === 32 && pajaro.body.speed<1){
        pajaro.trayectory = [];
        console.log("si entro el condicional");
        puntos=0
        Matter.Body.setPosition(pajaro.body,{x:200,y:100})
        resortera.attach(pajaro.body);
        setup();
    }
}