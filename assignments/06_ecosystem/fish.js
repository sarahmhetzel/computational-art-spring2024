class Fish {
    constructor(x, y, target) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1,1));
        this.acc = createVector(0, 0);

        this.targetFish = targetFish;
        this.maxSpeed = 2;
        this.maxForce = 0.1;

        this.range = 50;
        this.dimension = 15 + random(5);

        this.mass = 1;
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);

    }


    getCloseFish() {
        let closeFish = [];
        for (let fish of fishes) {
            if (fish !== this) {
                if (dist(fish.pos.x, fish.pos.y, this.pos.x, this.pos.y) < this.range) {
                    closeFish.push(fish);
                }
            }
        }
        return closeFish;
    }

    cohesion(closeFish) {
        if (closeFish.length > 0) {
            let sumPositions = createVector(0, 0);
            for (let fish of closeFish) {
                sumPositions.add(fish.pos);

            }
            sumPositions.div(closeFish.length);

            let desired = p5.Vector.sub(sumPositions, this.pos);
            desired.setMag(this.maxSpeed);
            let steerForce = p5.Vector.sub(desired, this.vel);
            steerForce.limit(this.maxForce);
            return steerForce
        }
        return createVector(0, 0);
    }


    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    update() {
        //this.seek(this.target);

        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);

        this.wrap();

        this.acc.set(0, 0);

        let closeFish = this.getCloseFish();
        let coheseForce = this.cohesion(closeFish);
        this.addForce(coheseForce);
    }

    show() {
        push();

        noStroke();
        translate(this.pos.x, this.pos.y);

        let angle = this.vel.heading();
        rotate(angle);

        fill(322, 20, 100);

        ellipse(0, 0, 30, 20);

        push();
        rotate(radians(30));
        ellipse(-10, 9, 10, 20);
        pop();

        push();
        rotate(radians(-30));
        ellipse(-13, -9, 10, 20);
        pop();

        fill('black');
        circle(5, -2, 6, 6);

        pop();

        //console.log('working');
    }
}