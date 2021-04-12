class Paper{
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.3,
          'density':1.2,
        
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;

      this.image = loadImage("Paper.png")
      this.image.scale = 0.5
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("blue");
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  };
  