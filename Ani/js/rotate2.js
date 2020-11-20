'ues-strict'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


var num = 1; //증가시킬 각도
setInterval(() => {
    ctx.save();  //초기상태 저장
    ctx.clearRect(0,0,460,460);    
    ctx.translate(300, 300);  // 중앙점 이동
    ctx.beginPath();
    ctx.rotate((Math.PI / 180) * num);     //회전
    ctx.rect(-50,-50, 100, 100); // 사각형 그리기 (그리는 사각형의 절반 크기만큼을 빼준다.)
    ctx.stroke();
    ctx.restore();
    num++;
    if(num >=365){
        num = 1;
    }
}, 10);

/*
function draw(){
    //rect
    ctx.clearRect(0, 0, 600, 600);
    ctx.save();
    ctx.translate(300,300);
    ctx.save(); // save 2

    let time = new Date();
    ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );

    ctx.rect(-50,-50,100,100);
    ctx.stroke();
    ctx.restore();
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(50,150);
    ctx.lineTo(150,150);
    ctx.lineTo(100,100);
    ctx.stroke();; 

    ctx.beginPath();
    ctx.arc(400, 400, 50, 0, 2*Math.PI, false);
    ctx.stroke();


    window.requestAnimationFrame(draw);
}
draw();*/