class State2{
    constructor(){
        current = createVector(-0.1, 0.1);

        midOcean.resize(0, 600);
        octoImg.resize(0, 100);
        inkImg.resize(0, 15);

        for(let i = 0; i < numOctos; i++){
            octos.push(new Octopus(random(100, width-100), random(100, height - 100)));
        }

    }
    draw(){
        colorMode(HSB);
        image(midOcean, 0, 0);


        push();
        translate(width / 2, height+30);
        this.tree(80);
        pop();

        push();
        translate(width / 8, height+40);
        this.tree(60);
        pop();

        push();
        translate(width / 1.2, height);
        this.tree(50);
        pop();

        for(let octo of octos){
            octo.update();
            octo.show();
            octo.wrap();
        }
    }

    tree(length) {
        push();
        let hue = map(noise(frameCount * 0.01), 0, 1, 80, 200);
        stroke(hue, 35, 100);
        strokeWeight(3);
        line(0, 0, 0, -length);
      
        translate(0, -length);
      
        length = length * 0.75;
      
        if (length > 5) {
            push();
      
            rotate(radians(-45 + map(noise(frameCount * 0.01), 0, 1, -10, 10)));
            this.tree(length);
      
            pop();
      
            push();
      
            rotate(radians(70));
            this.tree(length);
      
            pop();
        }
        pop();
      }

    mousePressed(){
        currentState = state3;
    }
}