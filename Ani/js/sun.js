
let sun = new Image();
let moon = new Image();
let earth = new Image();
let wing = new Image();

const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

function init(){
    sun.src = 'img/sun.png'
    moon.src = 'img/moon.png'
    earth.src = 'img/earth.png'
    wing.src = 'img/wing.png'

    window.requestAnimationFrame(draw);
}

function draw(){
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 600, 600);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save(); // 현재 ctx값 저장
    ctx.translate(150, 150);
    ctx.save();

    // Wing
    let time = new Date();

    ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(50, 0);
    ctx.drawImage(wing, -10, -10);

    ctx.restore();

    // Earth
    ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow
    ctx.drawImage(earth, -10, -10);

    // Moon
    ctx.save();
    ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);

    // planet
    ctx.restore();
    ctx.translate(35 ,0);
    ctx.drawImage(wing, -10, -10);


    // Sun
    ctx.restore();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.arc(150, 150, 140, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}

init();