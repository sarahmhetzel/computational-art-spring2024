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
        let y = height / 2;
        dotArray.push(new Dot(x, y, i + 0.5));

    }

    background(0, 0, 100);

}

function draw() {
    background(0, 0, 100, 0, 0.5);

    for (let dot of dotArray) {
        dot.update();
        dot.show();
    }
}