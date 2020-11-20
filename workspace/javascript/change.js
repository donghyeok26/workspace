'use strict'

function change(){
    const button = document.querySelector('.button');
    let myspan = document.querySelector('.myspan');
    button.addEventListener('click',()=>{
        myspan.classList.toggle("active");
    });
}