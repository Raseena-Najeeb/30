class Green {
    constructor(x,y) {
      var options = {
          isStatic: false,
          resitution : 0.1,
          friction : 0.5
      }
      this.body = Bodies.rectangle(x,y,40,40,options);
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed < 5)
      {
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, 40, 40);
      }
      else
      {
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility -1;
        tint(255,this.visibility);
        pop();
      }
    }
    }

