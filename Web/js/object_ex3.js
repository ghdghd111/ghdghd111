'use strict';

class Car {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value == '' || null ? '똥차' :value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value == '' || null ? 'silver' :value;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value <= 0 ? 10 :value;
    }

    speedUp(){
       return this.speed= this.speed+10;
    }

    speedDown(){
        return this.speed= this.speed-10;
    }

}

class Hyundai extends Car{
    speedUp(){
        return this.speed= this.speed+30;
     }
 
     speedDown(){
         return this.speed= this.speed-30;
     }
}
class Chevorlet extends Car{
    colorShift(key){
        return this.color=key;
    }
}

const hyundai = new Hyundai('Avante', 'sliver', 200);
const chevorlet = new Chevorlet('Chervolet911', 'black', 250);

hyundai.speedUp();
hyundai.speedUp();
console.log(hyundai.speed);

chevorlet.colorShift('white');
console.log(chevorlet.color);
console.log(chevorlet);


