'use-strict'
import{WaveGroup} from './wavegroup.js';
import{WaveGroup2} from './wavegroup.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
       
        this.waveGroup = new WaveGroup();
        this.waveGroup2 = new WaveGroup2();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
        requestAnimationFrame(this.animate2.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth *2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
        this.waveGroup2.resize(this.stageWidth, this.stageHeight-900);
    }

    animate(t){
        this.ctx.clearRect(0, 0, this.stageWidth,this.stageHeight);
        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));

    }

    animate2(t){
        this.waveGroup2.draw(this.ctx);
        requestAnimationFrame(this.animate2.bind(this));

    }
}

window.onload = () => {
    new App
}
