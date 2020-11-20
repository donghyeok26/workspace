'use strick'

class Car{
    constructor(name,color,engine,speed,passenger){
        this.name = name;
        this.color = color;
        this.engine = engine;
        this.speed = speed;
        this.passenger = passenger;
    }
    
    move(){
        console.log('speed 100');
    }

    shape(){
        console.log('nomal');
    }
    
    get passenger(){
        return this._passenger;
    }

    set passenger(value){
        if(value<0){
            //throw error('오류');
        }
        this._passenger=value <0?1:value;
    }

    shape(){

    }
    getcar(){
        return (this.speed);
    }
}

class Sonata extends Car{
    getcar(){
        console.log('open');
    }
}
     
const sonata = new Sonata('sonata','white',2000,100,5);
console.log(sonata.name);
console.log(sonata.color);
console.log("배기량:"+sonata.engine);
console.log(sonata.passenger);
console.log(sonata.getcar());



printValue(sonata,'name');
printValue(sonata,'color');

sonata.move();
sonata.shape();

sonata.speed='sonata speed :200';

console.log(sonata.speed);
console.log(sonata.passenger);