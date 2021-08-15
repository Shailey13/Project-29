class Stone {

    constructor(x, y, width, height){
        var options = {
            isStatic: true
        };

        this.width = width;
        this.height = height;
        this.body = Bodies.circle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("");
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
        }
}