class Link {

    constructor(bodyA, bodyB){
        this.link = Constraint.create({
            bodyA: bodyA.body.bodies[lastLink],
            pointA: {x: 0, y: 0},
            bodyB = bodyB.body,
            pointB: {x: 0, y: 0},
            length: 10,
            stiffness: 0.8,

        });

        World.add(world, this.link);
    }
}