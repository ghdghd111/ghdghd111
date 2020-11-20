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

const box2_1 = document.querySelector('.box2_1');
const box2_2 = document.querySelector('.box2_2');
const box2_3 = document.querySelector('.box2_3');
const box2_4 = document.querySelector('.box2_4');
const box2_5 = document.querySelector('.box2_5');

const box3_1 = document.querySelector('.box3_1');
const box3_2 = document.querySelector('.box3_2');
const box3_3 = document.querySelector('.box3_3');
const box3_4 = document.querySelector('.box3_4');
const box3_5 = document.querySelector('.box3_5');

const box4_1 = document.querySelector('.box4_1');
const box4_2 = document.querySelector('.box4_2');
const box4_3 = document.querySelector('.box4_3');
const box4_4 = document.querySelector('.box4_4');
const box4_5 = document.querySelector('.box4_5');

const box5_1 = document.querySelector('.box5_1');
const box5_2 = document.querySelector('.box5_2');
const box5_3 = document.querySelector('.box5_3');
const box5_4 = document.querySelector('.box5_4');
const box5_5 = document.querySelector('.box5_5');

box1_1.scrollIntoView();
box1_1.classList.toggle('active');

let x = 1;
let y = 1;


right.addEventListener('click', function(event){
    x++;
    console.log(x,y);
    move();
});
left.addEventListener('click', function(event){
    x--;
    console.log(x,y);
    move();
});
up.addEventListener('click', function(event){
    y--;
    console.log(x,y);
    move();
});
down.addEventListener('click', function(event){
    y++;
    console.log(x,y);
    move();
});
function move(){
    if(x==1 && y==1){ // 1열 ------------
        box1_1.classList.add('active');   
     }   
    if(x==2 && y==1){
        box1_2.classList.add('active'); 
     }
     if(x==3 && y==1){
        box1_3.classList.add('active');     
     }
     if(x==4 && y==1){
        box1_4.classList.add('active');    
    }
    if(x==5 && y==1){
        box1_5.classList.add('active');             
     }
     if(x==1 && y==2){ // 2열 ------------
        box2_1.classList.add('active');      
     }   
     if(x==2 && y==2){
        box2_2.classList.add('active');     
     }
     if(x==3 && y==2){
        box2_3.classList.add('active');     
     }
     if(x==4 && y==2){
        box2_4.classList.add('active');     
    }
    if(x==5 && y==2){
        box2_5.classList.add('active');     
     }     
     if(x==1 && y==3){ // 3열 ------------
        box3_1.classList.add('active');     
     }   
     if(x==2 && y==3){
        box3_2.classList.add('active');     
     }
     if(x==3 && y==3){
        box3_3.classList.add('active');     
     }
     if(x==4 && y==3){
        box3_4.classList.add('active');     
    }
    if(x==5 && y==3){
        box3_5.classList.add('active');     
     }     
     if(x==1 && y==4){ // 4열 ------------
        box4_1.classList.add('active');     
     }   
     if(x==2 && y==4){
        box4_2.classList.add('active');     
     }
     if(x==3 && y==4){
        box4_3.classList.add('active');     
     }
     if(x==4 && y==4){
        box4_4.classList.add('active');     
    }
    if(x==5 && y==4){
        box4_5.classList.add('active');     
     }     
     if(x==1 && y==5){ // 5열 ------------
        box5_1.classList.add('active');     
     }   
     if(x==2 && y==5){
        box5_2.classList.add('active');     
     }
     if(x==3 && y==5){
        box5_3.classList.add('active');     
     }
     if(x==4 && y==5){
        box5_4.classList.add('active');     
    }
    if(x==5 && y==5){
        box5_5.classList.add('active');     
     }        
}
