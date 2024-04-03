let count = 0;

function setup() {
 // put setup code here
    colorMode(HSB);
    createCanvas(600, 600);
    rectMode(CENTER);
    noFill();
}

function draw() {
  // put drawing code here
    background(350, 0, 0, 0.05);

    push();

    translate(width / 2, height / 2);
    scale(map(noise(frameCount * 0.01), 0, 1, 1, 4));
    rotate(frameCount * 0.03);
    drawShapes(0, 0, 400);

    pop();
}

function drawShapes(x, y, diameter) {

    count++;
    //console.log(count);

    let hue = (map(count, 0, 1000, 215, 300)) % 360;

    

    if (count % 2 === 0) {
        stroke(hue, 40, 100);
        //ellipse(x, y, diameter);
        fill(hue, 40, 20, 0.05);
        ellipse(x + diameter / 2, y, diameter);
        ellipse(x - diameter / 2, y, diameter);

    }
    else {
        stroke(hue, 70, 100);

        push();

        translate(x, y);
        rotate(-frameCount * 0.05);
        fill(hue, 40, 100, 0.005);
        rect(0, 0, diameter);

        pop();
    }

    if (diameter > 1) {
        drawShapes(x, y, diameter / 1.1);
    }
}