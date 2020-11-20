'use strict'

const brand = 'nike';
const name = 'airmax';
const size = 270
const price = 89000;

print(brand,name,size,price);

function print(brand,name,size,price){
    console.log(brand);
    console.log(name);
    console.log(size);
    console.log(price);
} 

const adidas ={brand : 'adidas', name : 'superstar', size : '280', price:'98000'};
print1(adidas);

function print1(shoes){
    console.log(shoes.brand);
    console.log(shoes.name);
    console.log(shoes.size);
    console.log(shoes.price);
}


class Shoes1{
    constructor(brand,name,size,price){
        this.brand = brand;
        this.name = name;
        this.size = size;
        this.price = price;
    }
}
  
const vans = new Shoes1('vans','oldschool',265,65000);
console.log(vans.brand);
console.log(vans.name);
console.log(vans.size);
console.log(vans.price);

