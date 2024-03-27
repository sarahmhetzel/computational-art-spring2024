class Vehicle {
    constructor(x, y, target) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1,1));
        this.acc = createVector(0, 0);

        this.target = target;
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

    getNeighbors() {
        let neighborVehicles = [];
        for (let vehicle of vehicles) {
            if (vehicle !== this) {
                if (dist(vehicle.pos.x, vehicle.pos.y, this.pos.x, this.pos.y) < this.range) {
                    neighborVehicles.push(vehicle);
                }
            }
        }
        return neighborVehicles;
    }

    alignment(neighborVehicles) {
        let sumVelocities = createVector(0, 0);
        for (let vehicle of neighborVehicles) {
            sumVelocities.add(vehicle.vel);
        }
        if (neighborVehicles.length > 0) {
            sumVelocities.div(neighborVehicles.length);
        }
        sumVelocities.setMag(this.maxSpeed);

        let steerForce = p5.Vector.sub(sumVelocities, this.vel);
        steerForce.limit(this.maxForce);

        return steerForce;
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

        let neighborVehicles = this.getNeighbors();
        let alignForce = this.alignment(neighborVehicles);
        this.addForce(alignForce);
    }

    show() {
        push();

        noStroke();
        translate(this.pos.x, this.pos.y);

        let angle = this.vel.heading();
        rotate(angle);

        fill(274, 24, 97);

        ellipse(0, 0, 20, 10);

        push();
        rotate(radians(30));
        ellipse(-7, 7, 5, 10);
        pop();

        push();
        rotate(radians(-30));
        ellipse(-10, -7, 5, 10);
        pop();

        fill('black');
        circle(5, -2, 3, 3);

        pop();
    }
}