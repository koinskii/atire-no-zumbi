class Zombie{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = loadImage("./assets/zombie.png")

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic: true})
        World.add(world,this.body)
    }
    
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}