'use strict';

// ex1)
const brand = 'PRADA';
const size = 'M';
const price = '$100';

print(brand,size,price);

function print(brand,size,price){
    console.log(brand);
    console.log(size);
    console.log(price);
}

// ex2)
const prada = {brand:'PRADA', size:'M', price:'$100'};
print2(prada);

function print2(bag){
    console.log(bag.brand);
    console.log(bag.size);
    console.log(bag.price);
}

// ex3)
class Bag{
    constructor(brand, size, price){
        this.brand = brand;
        this.size = size;
        this.price = price;
    }
    get price(){
        return this.price;
    }
    set price(value){
        if(value<=100){
            throw Error('100만원 이하의 가방이 없습니다!')
        }
    }
}

const prada2 = new Bag('PRADA', 'M', '100');
console.log(prada2.brand);
console.log(prada2.size);
console.log(prada2.price);