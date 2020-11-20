/*
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

*/
//분리
const screen =document.querySelector('.screen');
const outer =document.querySelector('.outer');
const inner =document.querySelector('.inner');
const client =document.querySelector('.client');


window.addEventListener('resize',()=>(
//screen.innerHTML=`window Screen Width:${screen.width},Window Screen height:${screen.height}`;
outer.innerHTML=`${outerWidth}`;
})