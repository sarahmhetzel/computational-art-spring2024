let pSystems = [];
let numSystems = 3;
let wind;

let a = 10;
let z = 2;

function setup() {
    createCanvas(600, 600);
    colorMode(HSB);

	wind = createVector(-0.1, .1);
	//upGravity = createVector(0, -0.1);
	//downGravity = createVector(0, 0.1);


    for (let i = 0; i < numSystems; i++) {
		pSystems.push(new ParticleSystem(random(100, width - 100, height)));

    }
}

function draw() {
    background(200, 40 ,96);

    noStroke();
	fill(92, 49, 62, 0.5);
	ellipse(300, 550, width + 100, 300)
	fill(92, 49, 62);
	ellipse(300, 650, width + 100, 300)
	fill(92, 49, 62, 0.75);
	ellipse(400, 600, width, 300)
    //rect(0, 450, width, 300);

	fill(26, 30, 44);
	rect(400, 300, 20, 200);
	rect(200, 300, 30, 250);
	rect(510, 300, 15, 220);

	// tree 1
	fill(314, 36, 93, 0.8);
	circle(400, 300, 150);
	circle(450, 300, 100);
	circle(400, 250, 120);
	circle(350, 300, 150);

	// tree 2
	fill(314, 24, 100, 0.6);
	circle(200, 250, 200);
	fill(314, 24, 100, 0.8);
	circle(250, 300, 150);
	circle(120, 300, 150);
	fill(314, 24, 100, 0.4);
	circle(200, 350, 100);
	circle(300, 300, 150);

	//tree 3
	fill(314, 24, 100, 0.6);
	circle(500, 250, 100);
	fill(314, 24, 100, 0.8);
	circle(550, 300, 150);
	circle(520, 300, 150);
	fill(314, 24, 100, 0.4);
	circle(500, 350, 100);
	circle(500, 300, 150);

	//sun
	fill(49, 44, 100);
	ellipse(a - 10, 50, 90, 90);

	//clouds
	fill(217, 0, 100, 0.8);
	ellipse(a, 100, 50, 50);
	ellipse(a, 110, 75, 50);
	ellipse(a + 50, 100, 100, 50);
	ellipse(a + 20, 80, 100, 75);

	ellipse(a + 200, 90, 100, 50);
	ellipse(a + 200, 80, 75, 75);
	ellipse(a + 250, 85, 50, 50);

	a = a + z;

	if (a > width - 10 || a < 10) {
		z = -z;
    }




    for (let pSys of pSystems) {
        pSys.update();
	}

}
