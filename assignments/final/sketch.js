let flocks = [];
let numFlocks = 70;

let octos = [];
let numOctos = 3;

let anglers = [];
let numAnglers = 8;

let bubbleSystems = [];
let numSystems = 2;
let current;

let inkSystems = [];
let numInks = 1;

let backgroundImage;
let flockImg;
let bubbleImg;
let midOcean;
let darkOcean;
let anglerImg;
let subImg;
let octoImg;
let inkImg;

let funSong;

let currentState;
let state1;
let state2;
let state3;
let startState;

let webCam;
let camWidth = 40;
let camHeight = 28;
let pixelDimension;

let drumSample;
let drumSequence = [1, 2, 3, 4, 1, 2, 3, 4];

firstClick = 0;

let loop;
let synth;

let note;
let scale = "natural major";

let delay;
let reverb;

let shapes = [];
let numShapes = 15; 

let noteSet = [0, 4, 7, 11];
let interval = 0;

let root = 48;

function preload(){
  backgroundImage = loadImage("./images/ocean.jpg");
  flockImg = loadImage("./images/fish.png");
  bubbleImg = loadImage("./images/bubble.png");
  midOcean = loadImage("./images/middleocean.jpg");
  darkOcean = loadImage("./images/darkocean.jpg");
  anglerImg = loadImage("./images/angler.png");
  subImg = loadImage("./images/submarine.png");
  octoImg = loadImage("./images/octopus.png");
  inkImg = loadImage("./images/ink.png");

  funSong = loadSound("./samples/song.wav");
  drumSample = loadSound("./samples/kick.wav");
}

function setup(){
  createCanvas(900, 600);
  colorMode(HSB);

  webCam = createCapture(VIDEO);
  webCam.size(camWidth, camHeight);
  webCam.hide();

  pixelDimension = height/camHeight;

  pixelDensity(1);

  loop = new p5.SoundLoop(soundLoop, 1);
  synth = new p5.PolySynth();

  delay = new p5.Delay();
  delay.process(synth, 0.5, 0.6, 2300);

  reverb = new p5.Reverb();
  reverb.process(synth, 0.5, 0.5);

  state1 = new State1();
  state2 = new State2();
  state3 = new State3();
  startState = new Start();

  currentState = startState; 

}

function draw(){
  currentState.draw();
}

function soundLoop(timeFromNow){
  if(interval % 8 ==0){
    if(root == 48){
      root += 8;
    }
    else{
      root -= 8;
    }
  }

  let soundIndex = interval % noteSet.length;
  note = midiToFreq(root + noteSet[soundIndex]);
  synth.play(note, 0.8, timeFromNow, 0.2);

  let drumIndex = interval % drumSequence.length;
  if (drumSequence[drumIndex] == 1) {
    drumSample.play(timeFromNow);
  }

  note ++;
  interval ++;
}

function mousePressed(){
  currentState.mousePressed();

  userStartAudio();

    firstClick += 1;

    if(firstClick == 1){
      loop.start();
    }
    else{
      console.log('already started');
    }
}

