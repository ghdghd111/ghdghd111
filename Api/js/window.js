'use-strict';

const ow = document.querySelector('.box ul li:nth-child(1)');
const oh = document.querySelector('.box ul li:nth-child(2)');
const iw = document.querySelector('.box ul li:nth-child(3)');
const ih = document.querySelector('.box ul li:nth-child(4)');


function updatelog(){
    ow.innerHTML = ('outer width = '+ outerWidth);
    oh.innerHTML = ('outer height = '+ outerHeight);
    iw.innerHTML =('inner width = '+ innerWidth);
    ih.innerHTML =('inner height = '+ innerHeight);    
}

window.addEventListener('resize',()=>{
    ow.innerHTML = ('outer width = '+ outerWidth);
    oh.innerHTML = ('outer height = '+ outerHeight);
    iw.innerHTML =('inner width = '+ innerWidth);
    ih.innerHTML =('inner height = '+ innerHeight);     
});

updatelog();