import{B}from './b.js';

export class A{
    constructor(){
        this.num1 = 10;
        this.num2 = 20;
        this.num3 = 30;
        this.num4 = 40;
        this.sum = 0;

        this.b = new B(this.num1, this.num2, this.num3, this.num4);
        this.minus = this.b.sum;
        this.plus();
    }
    plus(){
        this.sum = this.num1 + this.num2 + this.num3 + this.num4;
        this.print();
    }
    print(){
        console.log(`plus값 : ${this.sum}`);
    }
}