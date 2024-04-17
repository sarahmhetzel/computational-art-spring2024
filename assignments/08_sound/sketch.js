let drumSample;
let drumSequence = [1, 2, 3, 4, 1, 2, 3, 4];

let altSample;
let altSequence = [0, 1, 1, 1, 0, 1, 1, 1];

firstClick = 0;

let loop;
let synth;

let note;
let scale = "flamenco";

let delay;
let reverb;

let shapes = [];
let numShapes = 15; 

let flamSet = [0, 1, 3, 5, 8, 12];
let interval = 0;

let root = 60;


function preload() {
    drumSample = loadSound("https://sarahmhetzel.github.io/computational-art-spring2024/assignments/08_sound/samples/kick.wav");
    //altSample = loadSound("")
}

function setup() {
  colorMode(HSB);
 // put setup code here
 createCanvas(600, 600);

 for (let i = 0; i < numShapes; i++) {
  shapes.push(new Shape(random(width), random(height)));
}

 loop = new p5.SoundLoop(soundLoop,  1);

 synth = new p5.PolySynth();

 delay = new p5.Delay();
 delay.process(synth, 0.5, 0.6, 2300);

 reverb = new p5.Reverb();
 reverb.process(synth, 0.5, 0.6);

  background(0, 0, 100);
}

function soundLoop(timeFromNow){
if(interval % 8 == 0){
  if(root == 60){
    root += 10;
  }
  else{
    root -= 10;
  }
}
  //drumSample.play(timeFromNow);

  let flamIndex = interval % flamSet.length;
  note = midiToFreq(root + flamSet[flamIndex]);
  synth.play(note, 0.5, timeFromNow, 0.5);

  for(let shape of shapes){
    shape.growShape();
  }

  let drumIndex = interval % drumSequence.length;
  if (drumSequence[drumIndex] == 1) {
    drumSample.play(timeFromNow);
  }

  let altIndex = interval % altSequence.length;
  if(altSequence[altIndex] == 1){
    altSample.play(timeFromNow);
  }
                
  note ++;
  interval ++; 
  
}

function draw() {
  background(0, 0, 0, 0.1);

  //let h = (map(frameCount, 0, 2000, 100, 300));
  //fill(h, 50, 70);
  for (let shape of shapes){
    shape.show();
    shape.update();
    //shape.collisionSound();
  }
}

function mousePressed() {
    userStartAudio();

    firstClick += 1;

    if(firstClick == 1){
      loop.start();
    }
    else{
      console.log('already started');
    }
} 