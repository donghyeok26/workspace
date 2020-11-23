'use strict';

class Photo{
    constructor(){
        this.aside = document.querySelector('.aside');
        this.bside = document.querySelector('.bside');
        this.cside = document.querySelector('.cside');
        this.head = document.querySelector('.head');
        this.center = document.querySelector('.center');
        this.footer = document.querySelector('.footer');
        this.dside = document.querySelector('.dside');
        this.eside = document.querySelector('.eside');
        this.resize();
    }
    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        console.log(`Client X: ${this.stageWidth}`);
        console.log(`Client Y: ${this.stageHeight}`);
    
        this.x = this.stageWidth / 3;
        this.y = this.stageHeight / 3;
        console.log(`1/3 X: ${this.x}`);
        console.log(`1/3 Y: ${this.y}`);
    
        this.center_x = this.stageWidth / 2;
        this.center_y = this.stageHeight / 2;
        console.log(`1/2 X: ${this.center_x}`);
        console.log(`1/2 Y: ${this.center_y}`);
    
        this.aside.style.top = `-${this.y}px`;
        this.bside.style.left = `-${this.x}px`;
        this.cside.style.top = `${this.y}px`;
        this.head.style.top = `-${this.y}px`;
        this.head.style.left = `${this.x}px`;
        this.center.style.top = `${this.y*3}px`;
        this.center.style.left = `${this.x*3}px`;
        this.footer.style.top = `${this.y*3}px`;
        this.footer.style.left = `${this.x}px`;
        this.dside.style.top = `-${this.y}px`;
        this.dside.style.left = `${this.x*2}px`;
        this.eside.style.top = `${this.y*3}px`;
        this.eside.style.left = `${this.x*1.92}px`;
        
    
        this.cssProcess(this.aside,"visible","relative",'transform 1000ms ease-in',`translateY(${this.y}px)`);
        this.cssProcess(this.bside,"visible",'relative','transform 1200ms ease-in',`translateX(${this.x}px)`);
        this.cssProcess(this.cside,"visible",'relative','transform 1400ms ease-in',`translateY(-${this.y}px)`);
        this.cssProcess(this.head,"visible",'absolute','transform 1400ms ease-in',`translateY(${this.y}px)`);
        this.cssProcess(this.center,"visible",'absolute','transform 1400ms ease-in',`translate(-${this.x*2}px, -${(this.y*2)+((this.y*35)/100)}px)`);
        this.cssProcess(this.footer,"visible",'absolute','transform 1800ms ease-in',`translateY(-${this.y+((this.y*10)/100)}px)`);
        this.cssProcess(this.dside,"visible",'absolute','transform 2000ms ease-in',`translateY(${this.y}px)`);
        this.cssProcess(this.eside,"visible",'absolute','transform 2000ms ease-in',`translateY(-${this.y*1.9}px)`);
    }
        cssProcess(location,visibility,position,transit,transform){
            const loc = location;
            const visi = visibility;
            const posit = position;
            const trans = transit;
            const tran = transform;

            location.style.visibility =visi;
            location.style.position = position;
            location.style.transition = trans;
            location.style.transform = transform;
        }

}


// window.onload = () => {
//     resize();
// }

window.addEventListener('resize',()=>
new Photo());


window.onload = () =>{
    new Photo
}


