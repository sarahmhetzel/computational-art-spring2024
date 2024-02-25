class ParticleSystem {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.particles = [];

        this.active = true;

        this.radius = random(10, 20);
        this.speed = random(-1, -2);
        this.hue = random(280, 360);

    }

    update() {
        if (this.active) {
            this.particles.push(new Particle(this.pos.x, this.pos.y+100, this.hue));
        }


        for (let particle of this.particles) {
            particle.update();
            particle.show();
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].destroy) {
                this.particles.splice(i, 1);
            }
        }

    }
}