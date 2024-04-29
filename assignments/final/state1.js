class State1{
    constructor(){
        current = createVector(-0.1, 0.1);

        backgroundImage.resize(0, 600);
        flockImg.resize(0, 40);
        bubbleImg.resize(0, 10);
        noStroke();
      
        for (let i = 0; i < numSystems; i++){
          bubbleSystems.push(new BubbleSystem(random(100, width-100, height)));
        }
      
        for(let i =0; i<numFlocks; i++){
          flocks.push(new Flock(random(width), random(height)));
        }
    }
    draw(){
        background(0, 0, 0);
        image(backgroundImage, 0, 0);
      
        for(let bubbleSystem of bubbleSystems){
          bubbleSystem.update();
        }
      
        push();
        translate(width / 8, height);
        this.tree(60);
        pop();
      
        push();
        translate(width / 2, height+70);
        this.tree(60);
        pop();
      
        push();
        translate(width - 200, height+30);
        this.tree(60);
        pop();
      
        push();
        translate(width / 3, height+10);
        this.tree(40);
        pop();
      
        push();
        translate(width - 20, height);
        this.tree(40);
        pop();
      
        for(let flock of flocks){
          flock.update();
          flock.show();
          flock.wrap();
        }
      }
      
      tree(length) {
        push();
        let hue = map(noise(frameCount * 0.01), 0, 1, 250, 360);
        stroke(hue, 30, 100);
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
      
            rotate(radians(45));
            this.tree(length);
      
            pop();
        }
        pop();
      }

      mousePressed(){
        currentState = state2;
      }
    }

    