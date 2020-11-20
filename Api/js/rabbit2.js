'use-strict';

const box = document.querySelector('.box');
const rabbit = document.querySelector('.rabbit');
const up = document.querySelector('.up');
const score = document.querySelector('.score');
console.log(rabbit);


let x = 0; // 토끼점수
let y = 0; // 나머지 점수

function change(){ // 토끼박스 reset
    rabbit.style.background='sandybrown';
    rabbit.innerHTML='🐰';
}

function change2(){ // 나머지박스 reset
    box.style.background='sandybrown';
    box.innerHTML='🐷';
}

rabbit.addEventListener('click', function(event){
    rabbit.style.background = 'crimson'; // 색변경
    rabbit.innerHTML='+100'; // 점수표기
    setTimeout(change,200);
    x++;
    console.log(x);
    score.innerHTML= x*100-y*10; // 점수 합산
})
box.addEventListener('click', function(event){
    box.style.background = 'crimson';
    box.innerHTML='-10';
    setTimeout(change2,200);
    y++;
    console.log(y);
    score.innerHTML= x*100-y*10;
})

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('click', function(event){
    const x = event.clientX;
    const y = event.clientY;
    horizontal.style.background='crimson';
    vertical.style.background='crimson';
    setTimeout(color,200);
});
function color(){
    horizontal.style.background='white';
    vertical.style.background='white';
}

document.addEventListener('mousemove', function(event){
    const x = event.clientX;
    const y = event.clientY;    

    horizontal.style.top =`${y}px`;
    vertical.style.left = `${x}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
})

