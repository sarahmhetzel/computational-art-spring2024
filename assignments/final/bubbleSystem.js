class BubbleSystem{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.bubbles = [];

        this.alive = true;

        this.radius = random(10, 20);
        this.speed = random(-10, 10);
        this.hue = random(5, 10);
    }

    update(){
        if(this.alive){
            this.bubbles.push(new Bubble(this.pos.x + random(200), this.pos.y + random(200), this.hue));
        }

        for(let bubble of this.bubbles){
            bubble.update();
            bubble.show();
        }

        for (let i = this.bubbles.length -1; i >= 0; i--){
            if(this.bubbles[i].destroy){
                this.bubbles.splice(i, 1);
            }
        }
    }
}