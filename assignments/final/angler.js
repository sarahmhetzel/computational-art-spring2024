class Angler{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.vel = createVector(random(-5,5), random(-5, 5));
        this.acc = createVector(0, 0);

        this.maxSpeed = 5;
        this.maxForce = 0.05; 

        this.mass = 2;
        this.range = 300;
    }
    addForce(force){
        let forceMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceMass);
    }
    wrap(){
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }
    getCloseAngler(){
        let closeAnglers = [];
        for(let angler of anglers){
            if(angler !== this){
                if(dist(angler.pos.x, angler.pos.y, this.pos.x, this.pos.y) < this.range){
                    closeAnglers.push(angler);
                }
            }
        }
        return closeAnglers;
    }
    separation(closeAnglers){
        let sumAnglesToAnglers = createVector(0, 0);
        for(let angler of closeAnglers){
            let directionToAngler = p5.Vector.sub(angler.pos, this.pos);
            sumAnglesToAnglers.add(directionToAngler);
        }
        if(closeAnglers.length !== 0){
            sumAnglesToAnglers.div(closeAnglers.length);
        }
        sumAnglesToAnglers.setMag(this.maxSpeed);
        sumAnglesToAnglers.mult(-1);

        let steeringForce = p5.Vector.sub(sumAnglesToAnglers, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;
    }
    alignment(closeAnglers){
        let sumVelocities = createVector(0, 0);
        for(let angler of closeAnglers){
            sumVelocities.add(angler.vel);
        }

        if(closeAnglers.length > 0){
            sumVelocities.div(closeAnglers.length);
        }
        sumVelocities.setMag(this.maxSpeed);

        let steeringForce = p5.Vector.sub(sumVelocities, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;
    }
    update(){
        let closeAnglers = this.getCloseAngler();

        let separationForce = this.separation(closeAnglers);
        separationForce.mult(1.2);
        this.addForce(separationForce);

        let alignmentForce = this.alignment(closeAnglers);
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

        fill(44, 44, 99, 0.08);
        ellipse(100, 60, 150);
        fill(44, 44, 99, 0.1);
        ellipse(100, 60, 100);
        image(anglerImg, 0, 0);

        pop();
    }


}