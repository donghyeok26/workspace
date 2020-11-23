'use strict';

class Photo{
    constructor(){
/*left side*/
    this.aside = document.querySelector('.aside');
    this.bside = document.querySelector('.bside');
    this.cside = document.querySelector('.cside');

/*center*/
    this.head = document.querySelector('.head');
    this.center = document.querySelector('.center');
    this.footer = document.querySelector('.footer');

/*right side*/
    this.dside = document.querySelector('.dside');
    this.eside = document.querySelector('.eside');

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
    this.center1Event();
    this.aside1Event();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    
        this.x = this.stageWidth / 3;
        this.y = this.stageHeight / 3;
    
        this.center_x = this.stageWidth / 2;
        this.center_y = this.stageHeight / 2;
    
        this.divPosition(this.aside, `-${this.y}px`);
        this.divPosition(this.bside, '', `-${this.x}px`);
        this.divPosition(this.cside, `${this.y}px`);
        this.divPosition(this.head, `-${this.y}px`,`${this.x}px`);
        this.divPosition(this.center, `${this.y*3}px`,`${this.x*3}px`);
        this.divPosition(this.footer, `${this.y*3}px`,`${this.x}px`);
        this.divPosition(this.dside, `-${this.y}px`,`${this.x*2}px`);
        this.divPosition(this.eside,`${this.y}px`,`${this.x*1.9}px`);
    
        this.stylePosition(this.aside,'visible', 'relative', 'transform 2000ms ease-in', `translateY(${this.y}px)`, '1');
        this.stylePosition(this.bside,'visible', 'relative', 'transform 2000ms ease-in', `translateX(${this.x}px)`, '1');
        this.stylePosition(this.cside,'visible', 'relative', 'transform 2000ms ease-in', `translateY(-${this.y}px)`, '1');
        this.stylePosition(this.head, 'visible', 'absolute', 'transform 1400ms ease-in', `translateY(${this.y}px)`, '1' );
        this.stylePosition(this.center, "visible", 'absolute', 'transform 1400ms ease-in', `translate(-${this.x*2}px, -${(this.y*2)+((this.y*35)/100)}px)`, '1');
        this.stylePosition(this.footer, "visible", 'absolute', 'transform 1800ms ease-in', `translateY(-${this.y+((this.y*10)/100)}px)`, '-1' );
        this.stylePosition(this.dside,'visible', 'absolute', 'transform 2000ms ease-in', `translateY(${this.y}px)`, '-1');
        this.stylePosition(this.eside,'visible','relative','transform 2000ms ease-in',`translateY(-${this.y*2.9}px)`,'-1');
    }

    divPosition(location, top, left){
        const loc = location;
        const tp = top;
        const lf = left;

        loc.style.top = tp;
        loc.style.left = lf;
    }

    stylePosition(location, visibility, position, transition, transform, zIndex){
        const loc = location;
        const vis = visibility;
        const pos = position;
        const transi = transition;
        const transf = transform;
        const indexNum = zIndex;

        loc.style.visibility = vis;
        loc.style.position = pos;
        loc.style.transition = transi;
        loc.style.transform = transf;
        loc.style.zIndex = indexNum;
    }

    center1Event(){
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;
        const x = this.stageWidth / 3;
        const y = this.stageHeight / 3;

        const center = this.center
        const center1 = document.querySelector('.center1');
        const shadow = document.querySelector('.shoadow');

        center1.addEventListener('click', function(){
            center1.style.background = 'url("/web/img/mac2.png")';
            center1.style.backgroundSize = 'cover';
            center1.style.transition = 'transform 1000ms ease-in';
            center1.style.transform = 'scale(2)';
            center1.style.color = 'rgba(255,255,255,0.5)';
            center1.style.fontSize ='50px';
            center1.style.textAlign = 'center';
            center1.style.lineHeight = center1.clientHeight+'px';
            shadow.style.display = 'block';
            center.style.zIndex = '99';
            center.style.top= y*3.2+'px';
        })
    }

    aside1Event(){
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;
        const x = this.stageWidth / 3;
        const y = this.stageHeight / 3;

        const aside = this.aside;
        const aside1 = document.querySelector('.aside1');
        const shadow = document.querySelector('.shoadow');

        aside1.addEventListener('click', function(){
            aside1.style.background = 'url("/web/img/mac1.png")';
            aside1.style.backgroundSize = 'cover';
            aside1.style.transition = 'transform 1000ms ease-in';
            aside1.style.transform = 'scale(2)';
            aside1.style.color = 'rgba(255,255,255,0.5)';
            aside1.style.fontSize ='50px';
            aside1.style.textAlign = 'center';
            aside1.style.lineHeight = aside.clientHeight+'px';
            shadow.style.display = 'block';
            aside.style.zIndex = '99';
            aside.style.top= y*3.2+'px';
        })

    }
}



window.onload = () => {
    new Photo
}



