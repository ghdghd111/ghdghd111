'use strict';

class Car{
    constructor(name, color, cc, user){
        this.name = name;   //이름
        this.color = color; //색
        this.cc = cc; //배기량
        this.user = user;    // 탑승인원

    }
    move(){
        console.log('speed 100');
    }
    shape(){
        console.log('normal');
    }
    get user(){
        return this._user;
    }

    set user(value){
        if(value<0){
        //  throw Error('탑승인원이 정확하지 않습니다.')
        }
        this._user=value <0 ? 1 : value;
    }    
}

class Audi extends Car{
    shape(){
        console.log('open');
    }
}

class Benz extends Car{
    move(){
        console.log('speed 200');
    }
}

const audi = new Audi('Audi', 'red', 4000, 5);
const benz = new Benz('benz','blue',2000, -5);

audi.move();   // 아우디 속도
audi.shape();   // 아우디 모양

benz.move();    // 벤츠 속도
benz.shape();  // 벤츠 모양

benz.speed='benz speed : 200';
console.log(benz.speed);

console.log(audi.user);
console.log(benz.user);