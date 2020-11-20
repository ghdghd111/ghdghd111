export class B{
    constructor(num1, num2, num3,num4){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.num4 = num4;
        this.sum = 0;

        this.minus();
    }
    minus(){
        this.sum = this.num1 - this.num2 - this.num3 - this.num4;
        this.print();
    }
    print(){
        console.log(`minus값 : ${this.sum}`);
    }
}