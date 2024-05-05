class InkSystem{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.inks = [];

        this.alive = true;
 
        this.radius = random(10, 20);
        this.speed = random(-1, 1);
    }

    update(){
        if(this.alive){
            this.inks.push(new Ink(20, 55));
        }

        for(let ink of this.inks){
            ink.update();
            ink.show();
        }
        
        for(let i = this.inks.length - 1; i >= 0; i--){
            if(this.inks[i].destroy){
                this.inks.splice(i, 1);
            }
    }
}
}