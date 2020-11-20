'use-strict';

const box = document.querySelector('.box');
const rabbit = document.querySelector('.rabbit');
const button = document.querySelector('.button');
const up = document.querySelector('.up');
console.log(rabbit);

button.addEventListener('click', function(event){
    rabbit.scrollIntoView({behavior:"smooth"});
    rabbit.style.background='crimson';
    setTimeout(change,1000);
});

function change(){
    rabbit.style.background='sandybrown';
}

function change2(){
    box.style.background='sandybrown';
}

up.addEventListener('click', function(evnet){
    window.scrollTo(0,0);
});

rabbit.addEventListener('click', function(event){
    rabbit.style.background = 'crimson';
    setTimeout(change,200);
})
box.addEventListener('click', function(event){
    box.style.background = 'crimson';
    setTimeout(change2,200);
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

