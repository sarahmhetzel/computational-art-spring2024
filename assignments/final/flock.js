class Flock{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1,1));
        this.acc = createVector(0, 0);

        this.maxSpeed = 5;
        this.maxForce = 0.05;

        this.mass = 1;
        this.range = 150;
    }
    addForce(force){
        let forceMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceMass);
    }

    wrap(){
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    getCloseFlock(){
        let closeFlock = [];
        for(let flock of flocks){
            if(flock !== this){
                if(dist(flock.pos.x, flock.pos.y, this.pos.x, this.pos.y) < this.range){
                    closeFlock.push(flock);
                }
            }
        }
        return closeFlock;
    }

    separation(closeFlock){
        let sumAnglesToFlock = createVector(0, 0);
        for(let flock of closeFlock){
            let directionToFlock = p5.Vector.sub(flock.pos, this.pos);
            sumAnglesToFlock.add(directionToFlock);
        }
        if(closeFlock.length !== 0){
            sumAnglesToFlock.div(closeFlock.length);
        }
        sumAnglesToFlock.setMag(this.maxSpeed);
        sumAnglesToFlock.mult(-1);

        let steeringForce = p5.Vector.sub(sumAnglesToFlock, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;
    }

    alignment(closeFlock){
        let sumVelocities = createVector(0, 0);
        for(let flock of closeFlock){
            sumVelocities.add(flock.vel);
        }

        if(closeFlock.length > 0){
            sumVelocities.div(closeFlock.length);
        }
        sumVelocities.setMag(this.maxSpeed);

        let steeringForce = p5.Vector.sub(sumVelocities, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;
    }

    update(){
        let closeFlock = this.getCloseFlock();

        let separationForce = this.separation(closeFlock);
        separationForce.mult(1.2);
        this.addForce(separationForce);

        let alignmentForce = this.alignment(closeFlock);
        alignmentForce.mult(1);
        this.addForce(alignmentForce);
        
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);

        this.acc.set(0, 0);
    }

    show(){
        push();

        translate(this.pos.x, this.pos.y);
        let angle = this.vel.heading();
        rotate(angle);

        image(flockImg, 0, 0);
        // fill(300, 50, 100);
        // ellipse(0, 0, 20);

        pop();
    }

}