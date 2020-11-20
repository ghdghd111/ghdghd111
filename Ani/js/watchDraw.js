export class WatchDraw{
    constructor(){
        this.time = new Date();
        this.hour = this.time.getHours();
        if (this.hour == 0){
            this.hour = 12;
        }else if (this.hour >=13){
            this.hour -= 13
        }
        this.min = this.time.getMinutes();
        this.sec = this.time.getSeconds();
        this.m_sec = this.time.getMilliseconds();
        this.ang = 0.006 * ((this.sec * 1000) + this.m_sec);

    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight= stageHeight;
    }

    update(ctx) {
        let currentDate = new Date();
        let time = new Date();
        let hour = this.time.getHours();
        if (hour == 0){
            hour = 12;
        }else if (hour >=13){
            hour -= 13
        }
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let m_sec = time.getMilliseconds();

        let green = ctx.createRadialGradient(250, 250, .5, 250, 250, 250);
        green.addColorStop(0, 'hsla(180, 55%, 8%, 1)');
        green.addColorStop(1, 'hsla(180, 95%, 15%, 1)');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

        var realTime = hour + ':' + numPad0(min) + ':' + numPad0(sec);
        var textPosX = this.stageWidth/2 - 50;
        ctx.fillStyle = '#f8bbd0';
        ctx.font = "bold 1.6em 'Noto Serif', serif";
        ctx.fillText(realTime, textPosX, this.stageHeight / 2 + 250);  

        this.seconds(ctx, sec, m_sec);
        this.minutes(ctx, min, sec, m_sec);
        this.hours(ctx, hour, min, sec, m_sec);
        this.circle(ctx);
    }
  
   seconds(ctx, sec, m_sec) {
        this.ang = 0.006 * ((sec * 1000) + m_sec);
        ctx.fillStyle = '#f8bbd0';
        ctx.strokeStyle = '#f8bbd0';
        ctx.beginPath();
        ctx.moveTo(this.stageWidth*0.5, this.stageHeight*0.5);
        ctx.lineWidth = 3;
        //ctx.lineTo(this.stageWidth*0.5, 50);
        ctx.arc(this.stageWidth*0.5, this.stageHeight*0.5, 200, calcDeg(this.ang), calcDeg(this.ang), false);
        //ctx.lineTo(this.stageWidth*0.5, this.stageHeight*0.5);
        ctx.shadowColor = 'hsla(180, 45%, 5%, .4)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = -15;
        ctx.shadowOffsetY = -15;
        //ctx.fill();
        ctx.stroke();
    }

    minutes(ctx, min, sec, m_sec){
        this.ang = 0.0001 * ((min * 60 * 1000) + (sec * 1000) + m_sec);
        ctx.fillStyle = '#ffeeff';
        ctx.strokeStyle = '#ffeeff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.stageWidth*0.5, this.stageHeight*0.5);
        //ctx.lineTo(this.stageWidth*0.5, 50);
        ctx.arc(this.stageWidth*0.5, this.stageHeight*0.5, 150, calcDeg(this.ang), calcDeg(this.ang), false);
        //ctx.lineTo(this.stageWidth*0.5, this.stageHeight*0.5);
        ctx.shadowColor = 'hsla(180, 25%, 5%, .4)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;
        ctx.fill();   
        ctx.stroke();   
    }

    hours(ctx, hour, min, sec, m_sec){
        this.ang = 0.000008333 * ((hour * 60 * 60 * 1000) + (min * 60 * 1000) + (sec * 1000) + m_sec);
        if (this.ang > 360) {
            this.ang -= 360;
        }
        ctx.fillStyle = '#c48b9f';
        ctx.strokeStyle = '#c48b9f';
        ctx.beginPath();
        ctx.moveTo(this.stageWidth*0.5, this.stageHeight*0.5);
        //ctx.lineTo(this.stageWidth*0.5, 50);
        ctx.arc(this.stageWidth*0.5, this.stageHeight*0.5, 100, calcDeg(this.ang), calcDeg(this.ang), false);
        //ctx.lineTo(this.stageWidth*0.5, this.stageHeight*0.5);
        ctx.shadowColor = 'hsla(180, 45%, 5%, .4)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;
        ctx.fill();
        ctx.stroke(); 
    }
    circle(ctx){
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.arc(this.stageWidth*0.5, this.stageHeight*0.5,200,0,2*Math.PI,false);
        ctx.stroke();
    }

} 


function calcDeg(deg) {
    return (Math.PI / 180) * (deg - 90);
}

function numPad0(str) {  //0~60
    var cStr = str.toString(); 
    if (cStr.length < 2) {
        str = 0 + cStr;
    }
    return str;
}