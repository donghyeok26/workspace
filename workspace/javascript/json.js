'use strict'

//1.오브젝트를 json화 시키기

let json=JSON.stringify(true);
console.log(json);

json = JSON.stringify('🥧','🍔');
console.log(json);

const cat ={//object
    name:'donghyeok',
    color: 'white',
    size: null,
    birthDate: new Date(), //오늘시간

    mow:()=>{//메소드 function은 안들어감
        console.log(`${name}야옹`);
    },
};

console.clear();
console.log(cat);

json=JSON.stringify(cat);
console.log(json);
/*
json = JSON.stringify(cat);//보내기
parse = JSON.parse(json);//받기
*/
console.clear();

const obj=JSON.parse(json,(key,value)=>{
    console.log(`key: ${key} value: ${value}`)
    return key == 'birthDate' ? new Date(value):value; 
})

console.log(obj);
console.log(cat.birthDate.getDate());
console.log(obj.birthDate.getDate());



a =2;
var a;
console.log(a);

