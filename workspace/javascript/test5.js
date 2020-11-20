'use struct'
/*
const person1={firstname:'donghyeok',lastname:'choi',age:26}
print(person1);

function print(person1){
    console.log(person1.firstname);
    console.log(person1.lastname);
    console.log(person1.age);
}
*/
class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    
}

const person1 = new Person('donghyeok','choi',26);
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);

const person2 = new Person('sdf','ere',52);
console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);



 json =JSON.stringify(person1);
 /*json =JSON.startsWith(person2);*/
 console.log(json);
 

