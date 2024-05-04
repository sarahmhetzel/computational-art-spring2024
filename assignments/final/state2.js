class State2{
    constructor(){
        midOcean.resize(0, 600);
        octoImg.resize(0, 100);

        for(let i = 0; i < numOctos; i++){
            octos.push(new Octopus(random(width), random(height)));
        }
    }
    draw(){
        colorMode(HSB);
        image(midOcean, 0, 0);

        for(let octo of octos){
            octo.update();
            octo.show();
            octo.wrap();
        }
  
    }

    mousePressed(){
        currentState = state3;
    }
}