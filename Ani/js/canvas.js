'use-strict';

let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

// 원

context.beginPath();
context.arc(50, 50, 30, 1.5*Math.PI, Math.PI, true);
context.strokeStyle = 'blue';
context.stroke();

context.beginPath();
context.arc(200, 50, 30, 1.5*Math.PI, 0.5*Math.PI, true);
context.strokeStyle = 'blue';
context.stroke();

context.beginPath();
context.arc(350, 50, 30, 1.5*Math.PI, 2*Math.PI, true);
context.strokeStyle = 'blue';
context.stroke();

context.beginPath();
context.arc(500, 50, 30, 1.5*Math.PI, 4*Math.PI, false);
context.strokeStyle = 'blue';
context.stroke();

// 삼각형

context.beginPath();
context.strokeStyle = 'black';
context.moveTo(75, 200);
context.lineTo(75, 250);
context.stroke();

context.beginPath();
context.strokeStyle = 'black';
context.moveTo(150, 200);
context.lineTo(150, 250);
context.lineTo(200, 200);
context.stroke();

context.beginPath();
context.strokeStyle = 'black';
context.moveTo(250, 200);
context.lineTo(250, 250);
context.lineTo(300, 200);
context.lineTo(250, 200);
context.stroke();

// 사각형

context.beginPath();
context.strokeStyle = 'green';
context.moveTo(75, 300);
context.lineTo(75, 350);
context.stroke();

context.beginPath();
context.strokeStyle = 'green';
context.moveTo(150, 300);
context.lineTo(150, 350);
context.lineTo(200, 350)
context.stroke();

context.beginPath();
context.strokeStyle = 'green';
context.moveTo(250, 300);
context.lineTo(250, 350);
context.lineTo(300, 350);
context.lineTo(300, 300);
context.stroke();

context.beginPath();
context.strokeStyle = 'green';
context.moveTo(350, 300);
context.lineTo(350, 350);
context.lineTo(400, 350);
context.lineTo(400, 300);
context.lineTo(350, 300);
context.stroke();