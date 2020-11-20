'use-strict'

const jjang = document.querySelector('.jjang');
console.log(jjang);

jjang.addEventListener('click', function(event){
    console.log(event); // 선택한 마우스 커서의 위치값
    const rect = jjang.getBoundingClientRect(); // 선택한 오브젝트의 위치 값
    console.log(rect);
});

const scroll_1 = document.querySelector('.scroll_1');
const scroll_2 = document.querySelector('.scroll_2');
const scroll_3 = document.querySelector('.scroll_3');
const scroll_4 = document.querySelector('.scroll_4');

console.log(scroll_1);
console.log(scroll_2);
console.log(scroll_3);

/*
scroll_1.addEventListener('click', function(event){
    window.scrollBy({top: 260, left:0, behavior:"smooth"}); // 내가 지정한 값만큼 이동
});

scroll_2.addEventListener('click', function(event){
    window.scrollTo(0, 100)
    ; // 내가 지정한 위치로 이동
});
scroll_3.addEventListener('click', function(event){
    jjang.scrollIntoView(); // 내가 지정한 오브젝트로 이동
});
*/

scroll_1.addEventListener('click', function(event){ //위로 이동
    window.scrollBy({top: -260, left:0, behavior:"smooth"});
});
scroll_2.addEventListener('click', function(event){ //왼쪽 이동
    window.scrollBy({top: 0, left:-260, behavior:"smooth"});
});
scroll_3.addEventListener('click', function(event){ // 아래 이동
    window.scrollBy({top: 260, left: 0, behavior:"smooth"}); 
});
scroll_4.addEventListener('click', function(event){ // 오른쪽 이동
    window.scrollBy({top: 0, left: 260, behavior:"smooth"}); 
});