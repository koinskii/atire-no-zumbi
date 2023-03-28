class Bullet {
    constructor(x,y,w,h){

        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.speed = 0.05
        this.image = loadImage("./assets/bullet1.png")

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h)
        World.add(world, this.body)
    }
    
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}