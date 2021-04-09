class Trash {
    constructor(x,y,r){
    var options ={
     restitution :0.8,
    isStatic:false,
    friction :0.5,
    density:1.2
    }
    this.r=r
    this.x= x
    this.y=y
    this.image=loadImage("Trash.png")
    this.body =  Bodies.circle(this.x,this.y,this.r/2,options)
    this.r = r
   
    World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image ,0,0,this.r,this.r)
    pop()
        
    }
    }