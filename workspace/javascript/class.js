'use strict'

class Person{
constructor(name,age){
    this.name=name;
    this.age=age;
}


speak()
{
    console.log(`${this.name}:안녕하세요.`);
}
}



const lee_first = 'lee';
const lee_sec = 'hyeonsu';
const age ='42';


const lee = new Person('Mr_lee',42);//object
const kim = new Person('Ms_kim',49);
const choi = new Person('Mr_choi',26);

console.log(lee.name);
console.log(lee.age);
lee.speak();

console.log(kim.name);
console.log(kim.age);
lee.speak();

console.log(choi.name);
console.log(choi.age);
choi.speak();





class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        if(value<0){
            //throw error('니 나이가 어떻게 -1이되냐?');
            //alert('니 나이가 어떻게 -1이되냐?');
        }
        this._age =value;
        //this.age = value <0 ? 1:value;
    }
}

const user1 =new User('choi','donghyoek',-1);
console.log(user1.age);

//3. publuc, private

class Experimnet{
    public_val =2;
    #private_val= 4;
}

const experiment = new Experimnet();
console.log(experiment.public_val);
console.log(experiment.private_val);


//4.다양성

class Shape{ //함수의 다양성
    constructor(width,height,color){
    this.width = width;
    this.height = height;
    this.color = color;
}

draw(){

}

getArea(){
    return this.width*this.height;
}
}

class Trianlge extends Shape{ //함수의 상속
    draw(){
        console.log('🔺');
    }
    getArea(){
        return (this.width*this.height)/2;
    }
}
class Rectangle extends Shape{
    draw(){

        console.log('⬜'); //함수재정의
    }
}
const rectangle = new Rectangle(20,30,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle =new Trianlge(20,20,'red');
triangle.draw();
console.log(triangle.getArea());


//5. instanfce of

console.log(rectangle instanceof Rectangle);//Rectangle 안에 rectangle이 속해있으면 true 아니면 false
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Trianlge);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);




