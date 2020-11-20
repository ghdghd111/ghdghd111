'use-strict';

class Hong{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value < 0 ? 28 :value;
    }
    get job(){
        return this._job
    }
    set job(value){
        return this._job = value == '' || null ? 'student' :value; 
        // 직업에 빈칸이나 값이 없으면 학생으로 입력
    }
    ageUp(){
        return this.age = this.age+1;
     }
 
    ageDown(){
         return this.age = this.age-1;
     }
}

const hong = new Hong('Hyunchul', 28, '');
hong.ageDown(); // 나이 -1

let json = JSON.stringify(hong);
console.log(json);
let parse = JSON.parse(json);
console.log(parse);

const obj = JSON.parse(json, (key,value)=>{
    console.log(`key: ${key} value:${value}`)
})

