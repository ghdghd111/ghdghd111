'use-strict';

// 요소선택
const box1 = document.querySelector('#wrap .box:nth-child(1)');
const box2 = document.querySelector('#wrap .box:nth-child(2)');
const box3 = document.querySelector('#wrap .box:nth-child(3)');
const box4 = document.querySelector('#wrap .box:nth-child(4)');
const box5 = document.querySelector('#wrap .box:nth-child(5)');
const button = document.querySelector('button');

let click  = 0;

button.addEventListener('click', function(){
    click++;
    console.log(click);
    change();

    function change(){
        if(click == 1){
            // 색 추가
            box1.classList.add('active1');
            box2.classList.add('active2');
            box3.classList.add('active3');
            box4.classList.add('active4');
            box5.classList.add('active5');
        }
        if(click ==2){
            // 이전 색 삭제
            box1.classList.remove('active1');
            box2.classList.remove('active2');
            box3.classList.remove('active3');
            box4.classList.remove('active4');
            box5.classList.remove('active5');
            //색 추가
            box1.classList.add('active2');
            box2.classList.add('active3');
            box3.classList.add('active4');
            box4.classList.add('active5');
            box5.classList.add('active1');
            box2.classList.add('change1'); // 위치이동
        }
        if(click == 3){
            box1.classList.remove('active2');
            box2.classList.remove('active3');
            box3.classList.remove('active4');
            box4.classList.remove('active5');
            box5.classList.remove('active1');
            //색 추가
            box1.classList.add('active3');
            box2.classList.add('active4');
            box3.classList.add('active5');
            box4.classList.add('active1');
            box5.classList.add('active2');
            box2.classList.add('change2'); // 위치이동
        }
        if(click == 4){
            box1.classList.remove('active3');
            box2.classList.remove('active4');
            box3.classList.remove('active5');
            box4.classList.remove('active1');
            box5.classList.remove('active2');
            //색 추가
            box1.classList.add('active4');
            box2.classList.add('active5');
            box3.classList.add('active1');
            box4.classList.add('active2');
            box5.classList.add('active3');
            box2.classList.add('change3'); // 위치이동
        }
        if(click == 5){
            box1.classList.remove('active4');
            box2.classList.remove('active5');
            box3.classList.remove('active1');
            box4.classList.remove('active2');
            box5.classList.remove('active3');
            //색 추가
            box1.classList.add('active5');
            box2.classList.add('active1');
            box3.classList.add('active2');
            box4.classList.add('active3');
            box5.classList.add('active4');
            box2.classList.add('change4'); // 위치이동
        } 
        if(click == 6){
            box1.classList.remove('active5');
            box2.classList.remove('active1');
            box3.classList.remove('active2');
            box4.classList.remove('active3');
            box5.classList.remove('active4');
            box2.classList.remove('change1'); // 이전 위치 삭제
            box2.classList.remove('change2');
            box2.classList.remove('change3');            
            box2.classList.remove('change4');

            return click = 0;   // 재시작        
        }
    }        
});