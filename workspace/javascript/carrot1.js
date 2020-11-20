'use strict';

const startBtn =document.querySelector('.button');
const score = document.querySelector('.score');
const timer = document.querySelector('.timer');
const field = document.querySelector('.field');
const fieldRect = field.getBoundingClientRect();
const timerIndicator = document.querySelector('.timer');
const scoreText = document.querySelector('.score');

console.log(fieldRect);

let started = false;
let game_score = 0;
let game_timer ;
const football_count = 11;
const soccerball_count = 1;
const person_count = 11;
const football_size = 80;
const FIELD_TOP_PADDING = 50;

const Game_Duration_sec = 20;
startBtn.addEventListener('click',()=>{
    if(started){
        stopGame()
    }else{
        startGame()
    }   
    started =!started;
    console.log(startBtn);
})

function startGame(){
    inGame()
}

function stopGame(){
    
}

function inGame(){
    field.innerHTML="";
    addItem(field,football_count,'/web/img/러닝1.png','soccer');
    addItem(field,soccerball_count,'/web/img/축구공.png','football');
    addItem(field,person_count,'/web/img/러닝2.png','person');
    field.addEventListener('click',onFieldClickListener);
}


function addItem(field,count,imgPath,className){
    const x1 = 0;
    const x2 = fieldRect.width - football_size;
    const y1 = field.offsetTop + FIELD_TOP_PADDING;
    const y2 = field.offsetTop + fieldRect.height - football_size;
    for(let i = 0;i<count; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        item.style.userDrag = 'none';
        field.appendChild(item);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  /*
  function onFieldClickListener(event) {
    const target = event.target;
    if (!started) {
      return;
    }
    if (target.matches('.football')) {
      target.remove();
      score++;
      updateScoreBoard(score);
  
      if (score === soccerball_count) {
        finishGame(true);
      }
    } else if (target.matches('.soccer')) {
      stopGameTimer();
      finishGame(false);
    }
  }
*/