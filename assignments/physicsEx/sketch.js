let dots = [];
let numDots = 2;
let spring;

let gravitationalConstant = 0.00001;
let downwardGravity;
let wind;

function setup() {
    createCanvas(600, 400);
    colorMode(HSB);

    downwardGravity = createVector(0, 0.38);
    wind = createVector(-0.1, 0);

    // Create all the dots
    for (let i = 0; i < numDots; i++) {
        let x = map(i, 0, numDots, 100, width - 100);
        let y = 100;
        dots.push(new Dot(x, y, i + 1));
    }

    background(0, 0, 100);

    spring = new Spring(dots[0], dots[1], 100, -1);
}


function draw() {
    background(0, 0, 100, 0.1);

    //spring.update();
    spring.show();

    // Update and draw all the dots
    for (let dot of dots) {
        dot.update();
        dot.show();
    }

    noStroke();
    fill(360 * .6, 60, 100, 0.3);
    rect(0, height / 2, width, height / 2);
}
