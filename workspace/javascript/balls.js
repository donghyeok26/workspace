import{
    Points
} from './points.js'

import{
    Points1
}from'./points1.js'

export class Balls{
    constructor(){
        
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight= stageHeight;

        this.centerX = stageWidth/2;
        this.centerY = stageHeight /2;

        this.init();
    }

    init(){
        this.points = new Points(
        this.centerX,
        this.centerY);

        this.points1 = new Points1(
        this.centerX,
        this.centerY);
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'blue';
    
        this.points.update();
      //  console.log (ctx.fillStyle);
    
        ctx.arc(this.points.x, this.points.y ,30, 0, 2*Math.PI);
        // console.log (this.points.x);
        // console.log (this.points.y);
        ctx.fill();
    }

    draw1(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'red';
    
        this.points1.update();
      //  console.log (ctx.fillStyle);
    
        ctx.arc(this.points.x-200, this.points.y ,30, 0, 2*Math.PI);
        // console.log (this.points.x);
        // console.log (this.points.y);
        ctx.fill();
    }
}

