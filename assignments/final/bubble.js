class Bubble{
    constructor(x, y, h){
        this.pos = createVector(x, y);
        this.vel = createVector(random(0,5), random(0,1));
        this.acc = createVector(0, 0);

        this.hue = ((h+random(170, 215)) % 360);

        this.mass = 4;
        this.radius = 1 + sqrt(this.mass);
        this.lifetime = random(100, 200);
    }

    addForce(force){
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    update(){
        this.lifetime--;
        if(this.lifetime < 0){
            this.destroy = true;
        }

        this.addForce(current);
        this.vel.add(this.acc);
        this.vel.limit(3);
        this.pos.add(this.vel);

        this.acc.mult(0);
    }

    show(){
        push();

        translate(this.pos.x, this.pos.y);
        image(bubbleImg, 0, 0);
        // noStroke();
        // fill(this.hue, 20, 100, 0.5);
        // ellipse(0, 0, this.radius * 2);

        pop();
    }
}