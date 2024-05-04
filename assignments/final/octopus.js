class Octopus{
    constructor(x, y){
       this.pos = createVector(x, y);
       this.vel = createVector(random(-1, 1), random(-1, 1));
       this.acc = createVector(0, 0);

       this.inks = [];
       this.alive = true;

       this.radius = random(10, 20);
       this.speed = random(-10, 10);
       
       this.maxSpeed = 5;
       this.maxForce = 0.05;

       this.mass = 1;
    }

    addForce(force){
        let forceMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceMass);
    }

    wrap(){
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    update(){
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);

        this.acc.set(0, 0);

        if(this.alive){
            this.inks.push(new Ink(this.pos.x + random(-10, 10), this.pos.y + random(200)));
        }
        for(let ink of this.inks){
            ink.update();
            ink.show();
        }
        for(let i = this.inks.length - 1; i >= 0; i--){
            if(this.inks[i].destroy){
                this.inks.splice(i, 1);
            }
        }
    }

    show(){
        push();

        translate(this.pos.x, this.pos.y);
        let angle = this.vel.heading();
        rotate(angle);

        image(octoImg, 0, 0);

        pop();
    }
}