class Ball {
    constructor(x, y, width, height) {
        var options = {
         restitution : 1.0,
         density : 1.0    
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
      // Matter.Body.setAngle(this.body,angle);
       World.add(world, this.body);
      };
  
      display(){
        // Draw the tanker the way you like.
        // You could also use an image if you want a specific look
      var pos =this.body.position;
     // Matter.body.setAngle(this.body,30);
      rectMode(CENTER);
     // rotate(this.body.angle);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
      };
 }