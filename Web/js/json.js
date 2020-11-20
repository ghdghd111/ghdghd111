'use-strict';

//1. 오브젝트를 json화 시키기

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify('💜','💙');
console.log(json);

const cat ={
    name : 'tensu',
    color : 'white',
    size: null,
    brithDate : new Date(),

    yami :()=>{
        console.log(`${name} 야옹`);
    },
};

console.clear();
console.log(cat);

console.clear();

json = JSON.stringify(cat); // 보내기
parse = JSON.parse(json); // 받기

const obj = JSON.parse(json, (key,value)=>{
    console.log(`key: ${key} value:${value}`)
    return key== 'brithDate' ? new Date(value) : value;
})

console.log(obj);
console.log(cat.brithDate.getDate());
console.log(obj.brithDate.getDate());
