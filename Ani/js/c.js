import{A}from './a.js';
import{B}from './b.js';

class C{
    constructor(){
        this.a = new A();
        this.b = new B();
        this.sum = 0;

        //this.a.plus();
        //this.b.minus();
        this.cal();
    }
    cal(){
        this.sum = this.a.sum * this.a.minus;
        this.print();
    }
    print(){
        console.log(`곱한 값 : ${this.sum}`);
    }
}

window.onload =()=>{new C();};