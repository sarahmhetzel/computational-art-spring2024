let circleArray = [];
let numCircles = 100;

function setup() {
    createCanvas(600, 600);
    background('pink');

    for (let i = 0; i < numCircles; i++) {
        circleArray[i] = new Circ();
    }

}


function draw() {
    background('pink');
    fill(0, 30);
    rect(0, 0, width, height);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].move();
        circleArray[i].hitCheck();
        circleArray[i].show();
    }
}

class Circ {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(100, 200);
        this.col = color(random(255), random(255), random(255));

        this.velocityX = random(.5, 1);
        this.velocityY = random(-10, 10);
    }

    show() {
        stroke(this.col);
        noFill();
        ellipse(this.x, this.y, this.size, this.size);
    }
    hitCheck() {
        if ((this.x > width) || (this.x < 0)) {
            this.velocityX = this.velocityX * -1;
        }

        if ((this.y > height) || (this.y < 0)) {
            this.velocityY = this.velocityY * -1;
            this.col = color(random(255), random(255), random(255));
        }
    }
    move() {
        this.x = this.x + this.velocityX;
        this.y = this.y + this.velocityY;
    }

}
