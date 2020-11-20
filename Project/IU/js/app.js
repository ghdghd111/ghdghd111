'use-strict';


const slideList = document.querySelector('.main_slide_list');
const slides = document.querySelector('.main_slide');
const slidesLen = 3;
const slideBtnLeft = document.querySelector('.slide_left');
const slideBtnRight = document.querySelector('.slide_right');
const slideWidth = '100';
const slideSpeed = '300';
let curIndex = 0;

console.log(slidesLen);
console.log('curIndex : ' + curIndex);





slideBtnRight.addEventListener('click', function() {
    if (curIndex < slidesLen -1) {
    slideList.style.left = "-"+(slideWidth * (curIndex+1)) + "%";
    curIndex++;
    console.log('curIndex : '+curIndex);
    }else{
        slideList.style.left = 0;
        curIndex = 0;
        console.log('curIndex : ' + curIndex);
    }

});

slideBtnLeft.addEventListener('click', function() {
    if (curIndex > 0) {
    slideList.style.left = "-"+(slideWidth * (curIndex-1)) + "%";
    curIndex--;
    console.log('curIndex : '+curIndex);
    }else{
        slideList.style.left = '-'+200+'%';
        curIndex = 2;
        console.log('curIndex : '+curIndex);
    }

});