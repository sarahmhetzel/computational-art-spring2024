let vehicles = [];
let numVehicles = 75;

let fishes= [];
let numFish = 20;

let sharks = [];
let numSharks = 5;

let widthNum = 10;
let heightNum = 10;
let cellWidth;
let cellHeight;

let t = 0;
let shapes = [];

let color1;
let color2;

let hue;


function setup() {
    createCanvas(800, 500);
    colorMode(HSB);

    color1 = color(203, 38, 100);
    color2 = color(203, 84, 39);
    hue = random(320, 360);


    cellWidth = width / widthNum;
    cellHeight = height / heightNum;

    target = createVector(width/4, height/2);
    for (let i = 0; i < numVehicles; i++) {
        vehicles.push(new Vehicle(random(width), random(height), target));
    }

    targetFish = createVector(width / 4, height / 2);
    for (let i = 0; i < numFish; i++) {
        fishes.push(new Fish(random(width), random(height), targetFish));
    }

    targetShark = createVector(width / 4, height / 2);
    for (let i = 0; i < numSharks; i++) {
        sharks.push(new Shark(random(width), random(height), targetShark));
    }

}

function draw() {
    for (let i = 0; i < height; i++) {
        m = map(i, 0, height, 0, 1);
        let mCol = lerpColor(color1, color2, m);
        stroke(mCol);
        line(0, i, width, i);
    }

    //background(211, 59, 65);
    //target.x = mouseX;
    //target.y = mouseY;

    //createGrid();

    //fill('white');
    //ellipse(target.x, target.y, 10, 10);

    for (let vehicle of vehicles) {
        vehicle.update();
        vehicle.show();
    }

    for (let shark of sharks) {
        shark.update();
        shark.show();
    }


    push();
    translate(width / 4, height);
    tree(100);
    pop();

    push();
    translate(width / 2 + 150, height);
    tree(90);
    pop();

    push();
    translate(width / 2, height);
    tree(50);
    pop();

    push();
    translate(width / 8, height);
    tree(60);
    pop();

    push();
    translate(width/2+300, height);
    tree(70);
    pop();

    for (let fish of fishes) {
        fish.update();
        fish.show();
    }


}

function createGrid() {
    //noStroke();
    for (let i = 0; i < widthNum; i++) {
        for (let j = 0; j < heightNum; j++) {
            let x = cellWidth * i;
            let y = cellHeight * j;

            push();

            translate(x, y);

            fill(217, 57, 35);
            rect(0, 0, cellWidth, cellHeight);

            pop();
        }
    }
}


function tree(length) {
    push();
    stroke(hue, 45, 100);
    strokeWeight(5);
    line(0, 0, 0, -length);

    translate(0, -length);

    length = length * 0.67;

    if (length > 5) {
        push();

        rotate(radians(-45));
        tree(length);

        pop();

        push();

        rotate(radians(45));
        tree(length);

        pop();
    }
    pop();
}
