'use strict'

let array = new Array;

function insertArr(){
    for(let i =0;i<=99;i++){
        array[i]=i+1;
        console.log(array[i]);
    }
}
insertArr();

function odd(){
    for(let j=0;j<array.length;j++){
        console.log(array[j]);
        array.splice(2,1);
        //console.log(array[j]);
    }
}
odd();





