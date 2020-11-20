import{Wave} from'./wave.js'

export class WaveGroup2{
    constructor(){
        this.totalWaves = 5;
        this.totalPoints = 6;

        this.color = [
            'rgba(255,0,0,0.4)',
            'rgba(255,50,0,0.4)',
            'rgba(255,255,0,0.4)',
            'rgba(0,255,0,0.4)',
            'rgba(0,0,255,0.4)',
            'rgba(0,5,255,0.4)',
            'rgba(100,0,255,0.4)',
            'rgba(255,100,0,0.4)',
            'rgba(5,100,255,0.4)',
            'rgba(5,255,255,0.4)',
        ];

        this.waves = [];

        for(let i = 0; i<this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight){
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx){
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}