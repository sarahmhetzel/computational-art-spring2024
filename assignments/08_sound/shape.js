class Shape{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));

        this.size = 20;
        this.range = 50;

        this.hue = hue;
    }
    growShape(){
        if(firstClick >= 1){
          fill(this.hue, 50, 70);
          this.size += 5;
          //console.log(this.size);
          this.hue = random(360);
        }
    }
    update(){
        this.pos.add(this.vel);

        this.pos.add(this.vel);
        if (this.pos.x+(this.size/2) > width || this.pos.x-(this.size/2) < 0) {
            this.vel.x *= -1;
        }   
        if (this.pos.y+(this.size/2) > height || this.pos.y-(this.size/2) < 0) {
            this.vel.y *= -1;
        }
    }
    show(){
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}