//use strick
'use strick';

//let
/*var name = 'yangjung';
console.log(name);
name ='짬뽕이 맛있따';
console.log(name);
*/


/*
const count =17;
const size = 17.1;
const string ='양정'

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
console.log(`value: ${string}, type: ${typeof string}`);

console.log ('value'+count+'type:'+typeof count);
console.log ('value'+size+'type:'+typeof size);
console.log ('value'+string+'type:'+typeof string);
*/

/*
let i =0;
값은 있음
let j =null;
값이 없음
let k =undefined;
k가 정의 되지않음
*/

/*
a =2;
var a;
console.log(a);
*/
/*
function abc(){
    let a = 'bbb';
    console.log(a);
    function c(){
        console.log(a);
        (function(){
            console.log(a);
        a = 'ccc';
    })();
    var a;
    console.log(a)
}
function d(){
    console.log(a);
}
c();
a='ddd';
d();
};
abc();
*/

let a =0;
for(var i = 5; i--;){
    a++;
}
console.log(a);

let b = 0;
for(var i =5;i--;i){
    b++;
}
console.log(b);