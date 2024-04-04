let dotArray = [];
let numberDots = 20;

let gravConstant = 0.001;
let downGravity;
let wind;

function setup() {
    createCanvas(600, 600);
    colorMode(HSB);

    downGravity = createVector(0, 1);
    wind = createVector(-2, 0);

    for (let i = 0; i < numberDots; i++) {
        let x = map(i, 0, numberDots, 0, width);
        let y = height / 4;
        dotArray.push(new Dot(x, y, i + 0.5));

    }

    background(0, 0, 100);

}

function draw() {
    background(0, 0, 100, 0, 0.5);

    strokeWeight(1);
    stroke('white');

    for (let dot of dotArray) {
        dot.update();
        dot.show();
    }

    strokeWeight(0);
    fill(208, 44, 96, 0.5);
    rect(0, height / 2, width, height);
}