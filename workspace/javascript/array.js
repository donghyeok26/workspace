'use strict'

//1.기본

//const arr1 = newArray();
const arr2 = ['🔺','🤞','😜'];


console.log(arr2[0]);
console.log(arr2.length);
console.log(arr2);

//for of array value 값을 루프문으로 가져올 수 있다,

for(let value of arr2){
    console.log(value);
}

for(let i = 0; i<arr2.length;i++){
    console.log(arr2[i]);
}

const fruits = ['🍊','🍓','🍎'];
console.log(fruits);
//foreach
//반복해서 나오게 함
fruits.forEach(function(fruit,index,array){
    console.log(`forEach : ${fruit},${index},${array}`)
})

fruits.forEach((fruit,index,array)=>{console.log(`forEach : ${fruit},${index},${array}`)
})
//function 이름없으면 =>로 대체가능


//pop and push
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
//뒤에서부터 한개씩 삭제

fruits.push('🍉','🍏','🍒');
console.log(fruits);
//뒤에서 부터 추가

//shift and unshift
fruits.unshift('🍍','🍇');
//앞에서 부터 추가

fruits.shift();
console.log(fruits);
//앞에서 부터 삭제
//splice

fruits.splice(2,2);
console.log(fruits);

fruits.splice(1,0,'🥝','🥥');
console.log(fruits);

//배열합치기

const fastFood= ['🍟','🍔'];
const food = fruits.concat(fastFood);
console.log(food);

//indexof
//단일 개체로 사용하기위해 필요 앞에있는 위치
console.log(food.indexOf('🍔'));

console.log(food.indexOf('🥥'));

console.log(food.indexOf('🥧'));

//lastindexof 맨뒤에있는 위치

console.log(food.lastIndexOf('🍒'));
console.log(food.lastIndexOf('🍟'));
console.log(food.lastIndexOf('🥧'));


//includes
console.log(food.includes('🥧'));
console.log(food.includes('🍎'));
console.log(food.includes('🍒'));
//포함되있으면 TRUE 없으면 FALSE

const aa = food.join('^');
console.log(aa);