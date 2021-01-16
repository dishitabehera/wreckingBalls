class Slingshot{
    constructor(body,point){
        var chain_options = {
            bodyA: body,
            pointB:point,
            stiffness: 0.02,
            length:200
        }
        this.chain = Constraint.create(chain_options);
        
        World.add(world, this.chain)

    }

    display(){
        stroke("white");
       line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        //line connecting body x and y and point's x and y
        //line(x1,y1,x2,y2)
    }

    
}
