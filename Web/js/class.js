'use strict';

// 여러개의 변수를 하나로 사용 할 수 있게해줌



class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name}: 안녕하세요`);    
}
}

const hong = new Person('HONG', 28);
const park = new Person('PARK', 29);
const lee = new Person('Lee');

console.log(hong.name);
console.log(hong.age);
hong.speak();

console.log(park.name);
console.log(park.age);
park.speak();

console.log(lee.name);
console.log(lee.age);
lee.speak();



// getter(값을 가져감), setter(값을 세팅) 잘못된 값을 막기위해 사용


class User{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        if(value<0){
            //throw Error('나이가 어떻게 마이너스야!')
        }
        this._age=value <0 ? 1 : value;
    }

}

const user1 = new User('Hong','HyunChul',-2);
console.log(user1.age);


// public, private


class Experiment{
    publc_val =2;
    #private_val =4;    // #을 쓰면 내부에서만 사용 할 수 있음
}

const experiment = new Experiment();
console.log(Experiment.publc_val);
console.log(Experiment.private_val);


// 다양성

class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){

    }

    getArea(){
        return this.width * this.height;
    }
}

class Triangle extends Shape{  // extends 다른 calss에 있는 변수를 그대로 상속받음
    draw(){
        console.log('🔺');
    }
    getArea(){
        return this.width*this.height/2;
    }
}

class Rectangle extends Shape{
    draw(){
        console.log('⬛');   // 함수 재정의
    }
}

const rectangle = new Rectangle(20,30,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 30, 'blue');
triangle.draw();
console.log(triangle.getArea());

// instanceof   class의 instance가 맞으면 true, 틀리면 flase

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


