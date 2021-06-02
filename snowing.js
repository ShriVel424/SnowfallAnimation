class Snowing {
    constructor(x, y) {
        var options = {
            'restitution': 0.5,
            'friction': 0,
            isStatic:false
        }
        this.r = 6;
        this.body = Bodies.circle(x, y, this.r, options);
        this.snowImage = loadImage("snow4.webp");
        //World.add(world, this.body);
    }
    display() {

       Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,600)});
       this.body.push(position);

        var pos = this.body.position;
        var angle = this.body.angle;
       

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};