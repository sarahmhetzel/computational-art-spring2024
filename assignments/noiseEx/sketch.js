let numCircles = 100;

function setup() {
    createCanvas(400, 300);
    background('white');

    colorMode(HSB);
    noStroke();
 // put setup code here
}


function draw() {
  // put drawing code here

    let xoff = 0;
    for (let i = 0; i < numCircles; i++) {
        // getting the x position spaced out accross the screen
        let x = map(i, 0, numCircles, 0, width);
        let hue = map(i, 0, numCircles, 100, 300);

        let tallness = map(noise(xoff), 0, 1, 10, 300);

        fill(hue, 80, 100);
        ellipse(x, height / 2, width / numCircles, tallness);

        xoff += 5;
    }

}
