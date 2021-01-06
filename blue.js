class Blue {
    constructor(x,y) {
      var options = {
          isStatic: false,
          resitution : 0.1,
          friction : 0.5
      }
      this.body = Bodies.rectangle(x,y,40,40,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      

      if(this.body.speed < 5)
    {
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, 40, 40);
    }
    else
    {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility -5;
      tint(255,this.visibility);
      pop();
    }
  }
}
