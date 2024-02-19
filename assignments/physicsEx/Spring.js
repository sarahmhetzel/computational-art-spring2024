class Spring(){
    constructor(d1, d2, rest, constant){
        this.dot1 = d1;
        this.dot2 = d2;
        this.restLength = rest;
        this.constant = constant;
    }
}

update(){
    let vecBetweenDots = p5.sub(this.dot2, this.dot1);
    let distance = vecBetweenDots.mag();
    let stretch = distance - this.restLength;
    let springForce = stretch * this.constant;
}

show(){
    stroke(0);
    line(this.dot1.pos.x, this.dot1.pos.y, this.dot2.pos.x, this.dot2.pos.y )
}
