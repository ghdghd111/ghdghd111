import{
    Test
}from './test.js';

class Test1{
    constructor(){
        this.sum = 0;
        // this.totalNum = 4;
        // this.nums = [10,20,30,40];
        // this.tests = [];

        this.num1 = 10;
        this.num2 = 20;
        this.num3 = 30;
        this.num4 = 40;

        this.test = new Test(this.num1, this.num2, this.num3, this.num4);
        this.cal();

        /*
        for(let i = 0; i<this.totalNum; i++){
            const test = new Test(i, this.totalNum, this.nums[i]);
            this.nums[i] = test;
        }
        */
    }
    cal(){
        this.sum = this.test.num1 + this.test.num2 + this.test.num3 + this.test.num4
        this.print();
    }
    print(){
        console.log(this.sum)
    }
}

window.onload =()=>{new Test1();};