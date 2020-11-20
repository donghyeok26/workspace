import{
    Def
}from'./practice2.js';
class Abc{
    constructor(){
        this.num1 =10;
        this.num2 =20;
        this.num3 =30;
        this.num4 =40;
        this.def = new Def(
            this.num1,
            this.num2,
            this.num3,
            this.num4);
        console.log(this.def);
        this.sum=0;
        this.cal();
    }

    cal(){
        this.sum = this.def.num1+this.def.num2+this.def.num3+this.def.num4;
        console.log(this.sum);

    }
}

window.onload =()=>{
    new Abc
}