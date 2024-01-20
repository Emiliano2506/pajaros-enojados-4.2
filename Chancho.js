class Chancho extends PacajaPalitos{
    constructor(x,y){
        super(x,y,25,25);
        this.image = loadImage("./Imagenes/enemy.png");
    }
    display(){
        if(this.body.speed<3){
            super.display()
        }
        World.remove(world,this.body);
        push();
        this.Visiblility=this.Visiblility-5;
        tint(255,this.Visiblility);
        image(this.image,this.body.position.x,this.body.position.y,25,25)
        pop();
    }
}