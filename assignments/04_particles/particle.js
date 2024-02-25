class Particle {
    constructor(x, y, h) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(0, 5), random(0, 1));
        this.acc = createVector(0, 0);

        this.hue = ((h + random(300, 360)) % 360);
        //console.log(this.hue);

        this.mass = 4;

        this.radius = 1 + sqrt(this.mass);

        this.lifetime = random(100, 200);
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    update() {
        this.lifetime--;
        if (this.lifetime < 0) {
            this.destroy = true;
        }

        this.addForce(wind);
        //this.addForce(upGravity);
        //this.addForce(downGravity);

        this.vel.add(this.acc);
        this.vel.limit(3);
        this.pos.add(this.vel);

        this.acc.mult(0);

    }

    show() {
        push();

        translate(this.pos.x, this.pos.y+200);
        noStroke();
        fill(this.hue, 20, 100, 0.5);
        //console.log(this.hue);
        ellipse(0, 0, this.radius * 2);
        fill(this.hue + 10, 20, 100, 0.6);
        ellipse(5, 5, this.radius * 3);
        ellipse(-5, 5, this.radius * 3);
        ellipse(5, -5, this.radius * 3);
        ellipse(-5, -5, this.radius * 3);
        pop();
    }
}