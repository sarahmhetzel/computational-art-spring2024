let widthNum = 10;
let heightNum = 10;
let cellWidth;
let cellHeight;

function setup() {
 // put setup code here
    createCanvas(600, 600);
    colorMode(HSB);

    cellWidth = width / widthNum;
    cellHeight = height / heightNum;

    frameRate(10);
    
}

function draw() {
  // put drawing code here
    createGrid();
}

function createGrid() {
    for (let i = 0; i < widthNum; i++) {
        for (let j = 0; j < heightNum; j++) {
            let x = cellWidth * i;
            let y = cellHeight * j;

            push();

            //strokeWeight(0);

            translate(x, y);

            let hue = map(sin(x, y), 0, 1, 200, 300);
            fill(hue+20, 40, 100);
            rect(0, 0, cellWidth, cellHeight);

            // code here what goes inside each box
            //strokeWeight(1);
            let circleSize = map(noise(x, y), 0, 1, 0, cellWidth);//random(cellWidth);
            fill('white');
            ellipse(cellWidth / 2, cellHeight / 2, cellWidth, circleSize);
            fill(hue, 20, 100, 0.9);
            circle(cellWidth / 2, cellHeight / 2, circleSize - 3);
            fill('black');
            circle(cellWidth / 2, cellHeight / 2, circleSize - 20);

            pop();
        }
    }
}
