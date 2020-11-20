'use strict'
/*
window.addEventListener('resize',()=>{
    console.log(screen.width);
    console.log(screen.height);
    console.log(outerWidth);
    console.log(outerHeight);
    console.log(innerWidth);
    console.log(innerHeight);
});
*/
/*
Screen size  전체사이즈
outter size  주소창포함
inner size   html포함
client size
*/
/*
window.addEventListener('resize',()=>{
tag.innerHTML=`
window Screen Width:${screen.width},Window Screen height:${screen.height}
Window outer Width:${outerWidth},Window outer height:${outerHeight}
window inner Width:${innerWidth},Window inner height:${innerHeight}
Window Client width:${document.documentElement.clientWidth},
    Window Client Height:${document.documentElement.clientHeight}
    `;
});
*/

const tag=document.querySelector('.tag');
console.log(tag);

function updateTag(){
   
        tag.innerHTML=`
        window Screen Width:${screen.width},Window Screen height:${screen.height}
        Window outer Width:${outerWidth},Window outer height:${outerHeight}
        window inner Width:${innerWidth},Window inner height:${innerHeight}
        Window Client width:${document.documentElement.clientWidth},
            Window Client Height:${document.documentElement.clientHeight}
            `;
        };

        window.addEventListener('resize',()=>{
            updateTag();
});
updateTag();
const screen=document.querySelector('.screen');
console.log(screen);



/*
window.addEventListener('resize',()=>console.log('resize');)//한줄일 경우만 {}삭제가능
*/




