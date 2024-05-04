let flocks = [];
let numFlocks = 50;

let octos = [];
let numOctos = 2;

let anglers = [];
let numAnglers = 10;

let bubbleSystems = [];
let numSystems = 2;
let current;

let backgroundImage;
let flockImg;
let bubbleImg;
let midOcean;
let darkOcean;
let anglerImg;
let subImg;
let octoImg;

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

function preload(){
  backgroundImage = loadImage("./images/ocean.jpg");
  flockImg = loadImage("./images/fish.png");
  bubbleImg = loadImage("./images/bubble.png");
  midOcean = loadImage("./images/middleocean.jpg");
  darkOcean = loadImage("./images/darkocean.jpg");
  anglerImg = loadImage("./images/angler.png");
  subImg = loadImage("./images/submarine.png");
  octoImg = loadImage("./images/octopus.png");

  funSong = loadSound("./samples/song.wav");
}

function setup(){
  createCanvas(900, 600);
  colorMode(HSB);

  webCam = createCapture(VIDEO);
  webCam.size(camWidth, camHeight);
  webCam.hide();

  pixelDimension = height/camHeight;

  pixelDensity(1);

  state1 = new State1();
  state2 = new State2();
  state3 = new State3();
  startState = new Start();

  currentState = startState; 

  // funSong.play();
}

function draw(){
  currentState.draw();
}

function mousePressed(){
  currentState.mousePressed();
}

