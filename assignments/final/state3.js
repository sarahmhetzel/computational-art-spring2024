class State3{
    constructor(){

        darkOcean.resize(0, 600);
        anglerImg.resize(0, 100);
    }
    draw(){
        image(darkOcean, 0, 0);
        image(anglerImg, width/2, height/2);
        //fill(0, 0, 100);
        //rect(width/2, height/2, 100);
    }

    mousePressed(){
        currentState = state1;
    }
}