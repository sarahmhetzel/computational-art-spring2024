let xoff = 0;

let x;
let y;

let baseRadiusSlider;

function setup() {
    createCanvas(1000, 600);
    colorMode(HSB);

    x = width / 2;
    y = height / 2;

    baseRadiusSlider = createSlider(0, 10, 1, 0.01);
    baseRadiusSlider.position(50, 50);
    baseRadiusSlider.size(width - 100);
}

function draw() {

    background(0, 0, 100, 0.1);

    fill('black');

    push();
    translate(x, y);
    //ellipse(0, 0, 10, 10);

    beginShape();
    noFill();
    strokeWeight(1);
    stroke('red');
    baseRadius = 0;
    for (let theta = 0; theta < 100 * PI; theta += 0.5) {
        let radius = baseRadius + map(noise(xoff), 0, 1, -15, 15);

        let x = radius * cos(theta);
        let y = radius * sin(theta);
        vertex(x, y);

        xoff += 0.8;
        baseRadius += baseRadiusSlider.value();
    }

    endShape();

    pop();

    //noLoop();
}
