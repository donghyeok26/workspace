'use strict';

const jjang = document.querySelector('.jjang');
console.log(jjang);

jjang.addEventListener('click', function(event){
    console.log(event);
    const rect =jjang.getBoundingClientRect();
    console.log(rect);
});
/*

const scroll_by =document.querySelector('.scroll1');
const scroll_to =document.querySelector('.scroll2');
const scroll_in =document.querySelector('.scroll3');

console.log(scroll_by);
console.log(scroll_to);
console.log(scroll_in);

scroll_by.addEventListener('click',(event)=>window.scrollBy({top:100,left:0}));
scroll_to.addEventListener('click',(event)=> window.scrollTo(0,100));
scroll_in.addEventListener('click',()=>jjang.scrollIntoview());
//toview 특정위치로 이동
*/

const scroll_down=document.querySelector('.scroll1');
const scroll_up=document.querySelector('.scroll2');
const scroll_right=document.querySelector('.scroll3');
const scroll_left=document.querySelector('.scroll4');

console.log(scroll_down);
console.log(scroll_up);
console.log(scroll_right);
console.log(scroll_left);

scroll_down.addEventListener('click',(event)=>window.scrollBy({top:100,left:0}));
scroll_up.addEventListener('click',()=>window.scrollBy({top:-100,left:0}));
scroll_right.addEventListener('click',()=>window.scrollBy({left:100,top:0}));
scroll_left.addEventListener('click',()=>window.scrollBy({left:-100,top:0}));