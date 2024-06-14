class Pared{
    constructor(x, y, ancho, alto){
        this.body =Bodies.rectangle(x, y, ancho, alto, {isStatic:true})
        this.width= ancho;
        this.height= alto;
        World.add(world, this.body)
    }
    draw(){
    push();
    rectMode(CENTER);
    fill("greenyellow")
    stroke("green")
    rect(this.body.position.x, this.body.position.y, this.width,this.height)
    pop();
    }
}