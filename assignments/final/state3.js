class State3{
    constructor(){
        darkOcean.resize(0, 600);
        anglerImg.resize(0, 100);

        for(let i = 0; i < numAnglers; i++){
            anglers.push(new Angler(random(width), random(height)));
        }
    }

    draw(){
        colorMode(HSB);
        image(darkOcean, 0, 0);

        push();
        translate(width-700, height+10);
        this.treeReverse(40);
        pop();

        push();
        translate(width-800, height+20);
        this.treeReverse(60);
        pop();

        push();
        translate(width-20, height+20);
        this.tree(60);
        pop();

        push();
        translate(width/2, height);
        this.tree(60);
        pop();

        push();
        translate(width/2+100, height+50);
        this.treeReverse(60);
        pop();



        for(let angler of anglers){
            angler.update();
            angler.show();
            angler.wrap();
        }

        
    }

    tree(length) {
        push();
        let hue = map(noise(frameCount * 0.01), 0, 1, 250, 360);
        stroke(hue, 60, 80);
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
      
            rotate(radians(10));
            this.tree(length);
      
            pop();
        }
        pop();
      }

      treeReverse(length) {
        push();
        let hue = map(noise(frameCount * 0.01), 0, 1, 250, 360);
        stroke(hue, 60, 80);
        strokeWeight(3);
        line(0, 0, 0, -length);
      
        translate(0, -length);
      
        length = length * 0.75;
      
        if (length > 5) {
            push();
      
            rotate(radians(45 + map(noise(frameCount * 0.01), 0, 1, -10, 10)));
            this.tree(length);
      
            pop();
      
            push();
      
            rotate(radians(-10));
            this.tree(length);
      
            pop();
        }
        pop();
      }

    mousePressed(){
        currentState = startState;

        //funSong.play();
    }
}