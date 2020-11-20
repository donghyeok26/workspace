let togglebtn = document.querySelector('.nav_toggle');
let menu = document.querySelector('.nav_menu');
let link = document.querySelector('.nav_link');

togglebtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    link.classList.toggle('active');
});



