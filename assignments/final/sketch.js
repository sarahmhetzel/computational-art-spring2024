let flocks = [];
let numFlocks = 50;

let bubbleSystems = [];
let numSystems = 2;
let current;

let backgroundImage;
let flockImg;
let bubbleImg;
let midOcean;
let darkOcean;
let anglerImg;

let funSong;

let currentState;
let state1;
let state2;
let state3;

function preload(){
  backgroundImage = loadImage("./images/ocean.jpg");
  flockImg = loadImage("./images/fish.png");
  bubbleImg = loadImage("./images/bubble.png");
  midOcean = loadImage("./images/middleocean.jpg");
  darkOcean = loadImage("./images/darkocean.jpg");
  anglerImg = loadImage("./images/angler.png");

  funSong = loadSound("./samples/song.wav");
}

function setup(){
  createCanvas(900, 600);
  colorMode(HSB);

  state1 = new State1();
  state2 = new State2();
  state3 = new State3();

  currentState = state1; 

  // funSong.play();
}

function draw(){
  currentState.draw();
}

function mousePressed(){
  currentState.mousePressed();
}

