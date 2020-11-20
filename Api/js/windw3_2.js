'use-strict'

const up = document.querySelector('.up');
const left = document.querySelector('.left');
const down = document.querySelector('.down');
const right = document.querySelector('.right');

console.log(up);
console.log(left);
console.log(down);
console.log(right);

const box1_1 = document.querySelector('.box1_1');
const box1_2 = document.querySelector('.box1_2');
const box1_3 = document.querySelector('.box1_3');
const box1_4 = document.querySelector('.box1_4');
const box1_5 = document.querySelector('.box1_5');

box1_1.scrollIntoView();
box1_1.classList.toggle('active');
const rect = box1_1.getBoundingClientRect();
let x = 0;


right.addEventListener('click', function(event){
    x++;
   if(x==1){
    box1_2.scrollIntoView();
    box1_1.classList.remove('active');
    box1_2.classList.add('active');     
}
   if(x==2){
    box1_3.scrollIntoView();
    box1_2.classList.remove('active');
    box1_3.classList.add('active');     
}
   if(x==3){
    box1_4.scrollIntoView();
    box1_3.classList.remove('active');
    box1_4.classList.add('active');     
}
});