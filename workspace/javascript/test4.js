'use strict'
class Car {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    print(){

    }

    getspeed(){
        return this.speed+30;
    }
    
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value <= 0 ? 30 :value;
    }

    speedUp(){
       return this.speed= this.speed+30;
    }

    speedDown(){
        return this.speed= this.speed-10;
    }
    colorChange(key){
        return this.color=key;
    }

}

class Hyendae extends Car{
    print(){
        console.log(hyendae1);
    }
}

const hyendae1 = new Car('hyendae', 'white', 100);
hyendae1.print();
console.log(hyendae1.getspeed());
console.log(hyendae1);


const chevrolet = new Car('spark','',0);
chevrolet.colorChange('red');
chevrolet.speedUp();
chevrolet.speedUp();
chevrolet.speedUp();
console.log(chevrolet);