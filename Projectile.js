class Projectile{
    constructor(body,points) {
    var options = {
    bodyA:bodyA,
    pointe:points,
    stiffness:0.84,
    length:10,
    }
    this.pointB = pointB;
    this.body = Constraint.create(options);
    World.add(world, this.body);
  
    
    }
    
    release(){
    
    this.body.bodyA - null;
    
    }
    
    display(){
    if(this.body.bodyA){
    var pointA = this.body.bodyA.position; 
    var pointB = this.pointB;
     strokeweight (1);
    stroke("grey");
    line(pointA.x, pointA.y, pointB.x,pointB.y);
    }
}
}

