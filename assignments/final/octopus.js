class Octopus{
    constructor(x, y){
       this.pos = createVector(x, y);
       this.vel = createVector(random(-1, 1), random(-1, 1));
       this.acc = createVector(0, 0);
       
       this.maxSpeed = 5;
       this.maxForce = 0.05;

       this.mass = 1;

       for(let j = 0; j<numInks; j++){
        inkSystems.push(new InkSystem(this.x, this.y));
    }

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


    }

    show(){
        push();

        translate(this.pos.x, this.pos.y);

        let angle = this.vel.heading();
        rotate(angle);

        for(let inkSystem of inkSystems){
            inkSystem.update();
        }
        image(octoImg, 0, 0);

        pop();
    }
}