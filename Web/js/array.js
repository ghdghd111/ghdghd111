'use strict';

// 기본

// const arr1 = newArray();
const arr2 = ['😊','😂','😍'];
console.log(arr2[2]);
console.log(arr2.length);
console.log(arr2);

// for if array value 값을 루프문으로 가져올 수 있음

for(let value of arr2){
    console.log(value);
}

for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}

// for each : ket,index,array를 모두 뽑아 낼 수 있음

const food = ['🥣','🍝','🥘'];
console.log(food);

food.forEach(function(food, index, array){
    console.log(`foreach : ${food},${index},${array}`);
});

// pop(뒤에서 부터 index를 삭제) and push(뒤로 index 추가)

food.pop();
console.log(food);
food.pop();
console.log(food);
food.push('🍣','🍩');
console.log(food);

// shift(앞에서부터 삭제) and unshift(index를 앞 쪽으로 추가, 기존배열을 꺠트림)

food.unshift('🍙','🥩');
console.log(food);
food.shift();
console.log(food);

// splice(해당 index부터 뒤로 지움, 지울 index 숫자,해당 index자리에 추가)
// ex) food.splice(1,2,'🎉'); -> index 1번 부터 2개를 지우고 🎉를 추가

food.splice(2);
console.log(food);

// 배열 합치기 .concat
// food배열에 food2배열을 뒤쪽으로 추가함

const food2 = ['🍕', '🍔', '🍟'];
const fastfood = food.concat(food2);
console.log(fastfood);

// indexoaf(해당 key의 처음 만나는 index값을 추출), 해당 key값이 없다면 -1을 return
// lastindexof(해당 key값이 뒤에서 만나는 위치의 index값)

console.log(fastfood.indexOf('🍕'));
console.log(fastfood.indexOf('🍤'));

fastfood.push('🥨');
console.log(fastfood.lastIndexOf('🍕'));


// inculdes(해당 key값이 있으면 true 없으면 false를 return)
console.log(fastfood.includes('🍕'));

// join 배열 사이사이에 값을 추가하여 보기 쉽게 만들어줌
const aa = fastfood.join('|');
console.log(aa);