let xChange = 0;
let yChange = 0;
let n = 0;
let z = 3;

function setup() {
    colorMode(HSB);
    createCanvas(500, 500);
    background('black');

    noStroke();
    
}

function draw() {
    let xOffset = noise(xChange);
    let yOffset = noise(yChange);

    let hue = map(xChange*2, 0, 100, 100, 300);

    let x = map(xOffset, 0, 1, 0, width);
    let y = map(yOffset, 0, 1, 0, height);

    fill(hue, 50, 100);
    ellipse(x, y, 10, 10);

    xChange += 0.03;
    yChange += 0.02;

}
