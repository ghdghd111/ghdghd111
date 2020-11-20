import{
    Ball
} from './ball.js';

import{
    Block
} from './block.js'
class App{
    constructor(){
        this.canvas = document.createElement('canvas'); // canvas를 생성
        this.ctx = this.canvas.getContext('2d'); // block

        document.body.appendChild(this.canvas); // body안에서 제일끝에 this.canvas를 추가

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15); // width, height를 60, 15 값을 줌
        this.block = new Block(700, 30, 300 ,450);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); // ctx 값을 초기화

        this.block.draw(this.ctx); // block class에 해당 값을 던짐
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block); // ball class에 해당 값들을 던짐
    }
}
window.onload = () => {
    new App();
};