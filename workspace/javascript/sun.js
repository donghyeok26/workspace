

let sun = new Image();
let moon = new Image();
let earth = new Image();

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

function init(){
    sun.src ="/web/img/sun.png";
    moon.src="/web/img/moon.png";
    earth.src="/web/img/earth.png";
    window.requestAnimationFrame(draw);
}

function draw(){
    ctx.globalCompositeOperation="destination-over";
    ctx.clearRect(0,0,300,300);

    
    ctx.fillStyle="rgba(0,0,0,0,4)";
    ctx.strokeStyle="rgba(0,153,255,0.4)";
    ctx.save();
    ctx.translate(150,150);
    //지구
    let time = new Date();
    ctx.rotate(
    ((2*Math.PI)/60)*time.getSeconds()+
    ((2*Math.PI)/60000)*time.getMilliseconds()
    );
    ctx.translate(0,28.5);
    ctx.drawImage(moon,-3.5,-3.5);
    ctx.restore();
    ctx.restore();
    ctx.beginPath();
    
    ctx.fillRect(0,-12,50,24);
    ctx.drawImage(earth,-12,-12);

    //달
    //ctx.save();
    //ctx.restore();
    //ctx.drawImage(moon,220,220)

    //태양
    //ctx.save();
    //ctx.restore();
    ctx.drawImage(sun,0,0,300,300);
    //ctx.arc(150,150,105,0,Math.PI*2,false);
    //ctx.stroke();
    
    //window.requestAnimationFrame(draw);
}

init();