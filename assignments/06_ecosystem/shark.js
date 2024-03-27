class Shark {
    constructor(x, y, target) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1,1));
        this.acc = createVector(0, 0);

        this.targetShark = targetShark;
        this.maxSpeed = 2;
        this.maxForce = 0.1;

        this.range = 100;
        this.dimension = 15 + random(5);

        this.mass = 1;
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);

    }

    seek(t, arrive) {
        let desired = p5.Vector.sub(t, this.pos);

        let distance = desired.mag();

        if (arrive && distance < 100) {
            let speed = map(distance, 0, 100, 0, this.maxSpeed);
            desired.setMag(speed);
        }
        else {
            desired.setMag(this.maxSpeed);
        }

        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);

        this.addForce(steer);
    }

    getCloseSharks() {
        let closeSharks = [];
        for (let shark of sharks) {
            if (shark !== this) {
                if (dist(shark.pos.x, shark.pos.y, this.pos.x, this.pos.y) < this.range) {
                    closeSharks.push(shark);
                }
            }
        }
        return closeSharks;
    }

    cohesion(closeSharks) {
        if (closeSharks.length > 0) {
            let sumPositions = createVector(0, 0);
            for (let shark of closeSharks) {
                sumPositions.add(shark.pos);
            }
            sumPositions.div(closeSharks.length);

            let desired = p5.Vector.sub(sumPositions, this.pos);
            desired.setMag(this.maxSpeed);
            let steerForce = p5.Vector.sub(desired, this.vel);
            steerForce.limit(this.maxForce);
            return steerForce;
        }
        return createVector(0, 0);
    }

    separation(closeSharks) {
        let sumAnglesToSharks = createVector(0, 0);
        for (let shark of closeSharks) {
            let directionToShark = p5.Vector.sub(shark.pos, this.pos);
            sumAnglesToSharks.add(directionToShark);
        }

        if (closeSharks.length !== 0) {
            sumAnglesToSharks.div(closeSharks.length);
        }

        sumAnglesToSharks.setMag(this.maxSpeed);
        sumAnglesToSharks.mult(-1);

        let steerForce = p5.Vector.sub(sumAnglesToSharks, this.vel);
        steerForce.limit(this.maxForce);

        return steerForce;
    }


    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    update() {
        //this.seek(this.target);
        if (mouseIsPressed) {
            let mousePosition = createVector(mouseX, mouseY);
            this.seek(mousePosition);
        }
        else {
            let closeSharks = this.getCloseSharks();

            let coheseForce = this.cohesion(closeSharks);
            coheseForce.mult(1.5);
            this.addForce(coheseForce);

            let separateForce = this.separation(closeSharks);
            separateForce.mult(1);
            this.addForce(separateForce);
        }

        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);

        this.wrap();

        this.acc.set(0, 0);

    }

    show() {
        push();

        noStroke();
        translate(this.pos.x, this.pos.y);

        let angle = this.vel.heading();
        rotate(angle);

        fill(217, 40, 58);
        triangle(-40, 0, -60, 20, -60, -20);
        triangle(-10, -15, 10, -15, -5, -40);

        fill(217, 19, 58);
        ellipse(0, 0, 80, 40);

        fill('black');
        circle(15,-5, 6, 6);

        pop();

        //console.log('working');
    }
}