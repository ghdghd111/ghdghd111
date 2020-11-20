export class Point2{
    constructor(x, y){
        this.x = x*2/3;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = 0; 
        this.max = Math.random() * 100 + 300;
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY+(Math.sin(this.cur)*this.max);
    }
}