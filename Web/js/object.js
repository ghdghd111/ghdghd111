'use strict';

// object
// object = {키(우리가 접근 할 수 있는 프로퍼티) : 값의 집합체 (프로퍼티가 가지고 있는 값)}

/*
const name = 'Hong';
const age = 28;
const job = student;

print(name,age);


function print(name,age,job){
    console.log(name);
    console.log(age);
    console.log(job);
}
*/

const person1 = {name:'Hong', age:28};
// print(person1);

function print(person){
    console.log(person.name);
    console.log(person.age);
}


const hong = {name : 'Hyunchul' , age : 28};

person1.job = true;     // 인자를 추가할 수 있음
// console.log(person1.job);

// delete person1.name;    // 인자를 지울 수 있음
// console.log(person1.name);

// computed properties

console.log(person1.job);
console.log(person1['job']);

function printValue(obj, key){
    console.log(obj[key]);
    console.log(obj.key);
}

// fot in, for of

for(key in person1){    // for in : object 안에 있는 키의 갯수
    console.log(key);
}

const array = [1,2,3,4,5];

for(value of array){
    console.log(value);
}

for(let i =0; i<array.length; i++){
    console.log(array[i]);
}