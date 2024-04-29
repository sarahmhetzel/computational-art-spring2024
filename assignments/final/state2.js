class State2{
    constructor(){

        midOcean.resize(0, 600);
    }
    draw(){
        image(midOcean, 0, 0);
        //fill(0, 0, 100);
        //ellipse(width/2, height/2, 100);
    }

    mousePressed(){
        currentState = state3;
    }
}