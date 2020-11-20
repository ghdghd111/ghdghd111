const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var ang = 0;
var secondsColor = 'hsla(180, 85%, 5%, .7)';
var minutesColor = 'hsla(180, 95%, 15%, 1)';
var hoursColor = 'hsla(180, 75%, 25%, 1)';
var currentHr;
var currentMin;
var currentSec;
var currentMillisec;

window.onload =()=>{setInterval('updateTime()', 50);};

function updateTime() {
    let currentDate = new Date();
    let green = ctx.createRadialGradient(250, 250, .5, 250, 250, 250);
    green.addColorStop(0, 'hsla(180, 55%, 8%, 1)');
    green.addColorStop(1, 'hsla(180, 95%, 15%, 1)');
    ctx.fillStyle = green;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    currentSec = currentDate.getSeconds();
    currentMillisec = currentDate.getMilliseconds();
    currentMin = currentDate.getMinutes();
    currentHr = currentDate.getHours();
    if (currentHr == 00) {  //if midnight (00 hours) hour = 12
        currentHr = 12;
    }
    else if (currentHr >= 13) {  //convert military hours at and over 1300 (1pm) to regular hours by subtracting 12. 
        currentHr -= 12;
    }
    drawSeconds();
    drawMinutes();
    drawHours();
    var realTime = currentHr + ':' + numPad0(currentMin) + ':' + numPad0(currentSec);

    /*Here is the selected option of creating the text within the pie canvas elemenet */

    var textPosX = 250 - (ctx.measureText(realTime).width / 2);
    ctx.shadowColor = 'hsla(180, 100%, 5%, 1)';
    ctx.shadowBlur = 100;
    ctx.shadowOffsetX = 12;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = 'hsla(255,255%,255%,.7)';
    ctx.font = "bold 1.6em 'Noto Serif', serif";
    ctx.fillText(realTime, textPosX, canvas.height / 2 + 50);

    /* OR using a div to display the time (#time) where I pre-styled text with a long shadow using css...can't decide which I like better - but since this is a canvas demo....; (comment out the above text settings and uncomment the below) 
    
  document.getElementById('time').innerHTML = realTime;
    */
}

function drawSeconds() {
    ang = 0.006 * ((currentSec * 1000) + currentMillisec);
    ctx.fillStyle = secondsColor;
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250, 50);
    ctx.arc(250, 250, 200, calcDeg(0), calcDeg(ang), false);
    ctx.lineTo(250, 250);
    ctx.shadowColor = 'hsla(180, 45%, 5%, .4)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = -15;
    ctx.shadowOffsetY = -15;
    ctx.fill();
}

function drawMinutes() {
    ang = 0.0001 * ((currentMin * 60 * 1000) + (currentSec * 1000) + currentMillisec);
    ctx.fillStyle = minutesColor;
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250, 100);
    ctx.arc(250, 250, 150, calcDeg(0), calcDeg(ang), false);
    ctx.lineTo(250, 250);
    ctx.shadowColor = 'hsla(180, 25%, 5%, .4)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.fill();
}

function drawHours() {
    ang = 0.000008333 * ((currentHr * 60 * 60 * 1000) + (currentMin * 60 * 1000) + (currentSec * 1000) + currentMillisec);
    if (ang > 360) {
        ang -= 360;
    }
    ctx.fillStyle = hoursColor;
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250, 150);
    ctx.arc(250, 250, 100, calcDeg(0), calcDeg(ang), false);
    ctx.lineTo(250, 250);
    ctx.shadowColor = 'hsla(180, 45%, 5%, .4)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.fill();
}


function calcDeg(deg) {
    return (Math.PI / 180) * (deg - 90);
}
//handle zeros for minutes and seconds
function numPad0(str) {  //0~60
    var cStr = str.toString(); 
    if (cStr.length < 2) {
        str = 0 + cStr;
    }
    return str;
}
window.addEventListener('resize', function () {
    canvas.width = 500;
    canvas.height = 500;
});