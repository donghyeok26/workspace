import{
    Ball
}from'./ball_';
class App{
    constructor(){
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');//2d 애니메이션을 그린다  (2d 그리는 옵션)

    document.body.appendChild(this.canvas);

    window.addEventListener('resize',this.resize.bind(this),false);
    this.resize();

    this.ball = new Ball(this.stageWidth,this.stageheight,60,15);

    window.requestAnimationFrame(this.animate.bind(this));
}

resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageheight = document.body.clientHeight;

    this.canvas.width = this.stageWidth*2;
    this.canvas.height = this.stageheight*2;
    this.ctx.scale(2,2);
}
amimate(t){
    window.requestAnimationFrame(this.animate.bind(this));
    
    this.ctx.clearRect(0,0,this.stageheight.this.stageheight);

    this.ball.draw(this.ctx, this.stageWidth, this.stageheight);
}
}

window.onload =()=>{
    new App();
};