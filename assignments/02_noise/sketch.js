let xoff = 2;
let initialRadius = 0;

function setup() {
    colorMode(HSB);
    createCanvas(500, 500);
    
}

function draw() {
    background(0, 0, 0, 0.05);

    push();

    translate(width / 2, height / 2);

    noFill();

    beginShape();
    let hue = (map((frameCount * 0.05), 0, 20, 100, 360)) % 360;
    //console.log(frameCount);

    strokeWeight(2);
    stroke(hue, 70, 80);

    initialRadius = map(mouseX, 0, width, 1, 100);

    for (let i = 0; i < 128 * PI; i += 0.1) {
        let radius = initialRadius + map(noise(xoff), 0, 1, -15, 15);

        let x = radius * cos(i);
        let y = radius * sin(i);

        vertex(x, y);
        xoff += 0.2;

        initialRadius += 0.3;
    }

    endShape();

    pop();

}
