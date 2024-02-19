class Dot {
    constructor(x, y, index) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.index = index;

        this.hue = map(this.index, 0, numberDots, 330, 345);

        this.mass = this.index;

        this.radius = 10 + sqrt(this.mass) * 10;
    }

    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    gravityOtherDots() {
        for (let dot of dotArray) {
            if (dot !== this) {
                let vectorToOther = p5.Vector.sub(dot.pos, this.pos);
                let dist = vectorToOther.mag();
                let gForce = (gravConstant * this.mass * dot.mass) / dist * dist;

                vectorToOther.normalize();
                vectorToOther.mult(gForce);
                vectorToOther.mult(-1);
                dot.addForce(vectorToOther);
            }
        }
    }

    update() {
        this.addForce(downGravity);
        this.gravityOtherDots();

        this.vel.add(this.acc);
        this.vel.limit(5);
        this.pos.add(this.vel);

        this.wrap();

        this.acc.mult(0);
    }

    show() {
        push();

        //noStroke();

        translate(this.pos.x, this.pos.y);
        fill(this.hue, 50, 100, 0.5);
        ellipse(0, 0, this.radius * 5);

        pop();
    }
}