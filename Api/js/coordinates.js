'use strict';
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

console.log(horizontal);
console.log(vertical);
console.log(target);
console.log(tag);

document.addEventListener('click', function(event){
    const x = event.clientX;
    const y = event.clientY;
    target.style.background = 'red';
    setTimeout(change,200);
});

function change(){
    target.style.background = '';
}

document.addEventListener('mousemove', function(event){
    const x = event.clientX;
    const y = event.clientY;    

    horizontal.style.top =`${y}px`;
    vertical.style.left = `${x}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`; 
    tag.innerHTML = `(${x},${y})`;
   // console.log(`${event.clientX}, ${event.clientY}`);
})
 // console.log (event);

