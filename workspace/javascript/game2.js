"use strict";

const rabbit = document.querySelector(".rabbit");
const button = document.querySelector(".button");
const carrot = document.querySelector(".carrot");

console.log(rabbit);
console.log(button);
console.log(carrot);

let i = 0;
let j = 0;

button.addEventListener("click", () => rabbit.scrollIntoView());

rabbit.addEventListener("click", () => {
  setTimeout(() => {
    rabbit.innerHTML = "100점";
    setTimeout(() => {
      rabbit.remove();
    }, 1000);
  }, 2000);
});

carrot.addEventListener("click", () => {
  setTimeout(() => {
    carrot.innerHTML = "50점";
    setTimeout(() => {
      carrot.remove();
    }, 1000);
  }, 2000);
});

const x = document.querySelector(".x");
const y = document.querySelector(".y");
const point = document.querySelector(".point1");
const num = document.querySelector(".num");

console.log(x);
console.log(y);
console.log(point);
console.log(num);

document.addEventListener("click", function (event) {
  const xx = event.clientX;
  const yy = event.clientY;
  //console.log(event);
  //console.log(`${xx},${yy}`);
  //console.log('move');
  x.style.top = `${yy}px`; //css 바꾸는거  x의 style에 top값을 바꿔줘라
  y.style.left = `${xx}px`;
  point.style.top = `${yy}px`;
  point.style.left = `${xx}px`;
  num.style.top = `${yy}px`;
  num.style.left = `${xx}px`;
  num.innerHTML = `${xx}px,${yy}px`;
});
