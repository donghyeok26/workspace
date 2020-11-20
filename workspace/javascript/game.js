'use strict';

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');



const right = document.querySelector('.scroll_right');
const left = document.querySelector('.scroll_left');


function start() {
    box1.scrollIntoView();
    box2.classList.toggle('passive');//toggle 
    box3.classList.toggle('passive');
    box4.classList.toggle('passive');
    box5.classList.toggle('passive');
}
start();
let x = 0;
right.addEventListener('click', (event) => {
    x++;
    console.log(x);
    if (x == 1) {
        box2.scrollIntoView();
        box2.classList.toggle('passive');
        box1.classList.toggle('passive');
    }
    if (x == 2) {
        box3.scrollIntoView();
        box2.classList.toggle('passive');
        box3.classList.toggle('passive');

  
    }
    if (x == 3) {
        box4.scrollIntoView();
        box3.classList.toggle('passive');
        box4.classList.toggle('passive');
    }
    if (x == 4) {
        box5.scrollIntoView();
        box4.classList.toggle('passive');
        box5.classList.toggle('passive');
    }
}
)

left.addEventListener('click', (event) => {
    x--;
    console.log(x);
    if (x == 3) {
        box4.scrollIntoView();
        box4.classList.toggle('passive');
        box5.classList.toggle('passive');
    }
    if (x == 2) {
        box3.scrollIntoView();
        box3.classList.toggle('passive');
        box4.classList.toggle('passive');
    }
    if (x == 1) {
        box2.scrollIntoView();
        box2.classList.toggle('passive');
        box3.classList.toggle('passive');
    }
    if (x == 0) {
        box1.scrollIntoView();
        box1.classList.toggle('passive');
        box2.classList.toggle('passive');
    }
}
)
