import { This2 } from './this2.js';

export class This1{
    constructor(num1,num2,num3,num4){
        this.plus = new This2();
        this.minus();
        this.multiple();
        //this.sum1 =0;
        //this.m_result = 0;
    }
    minus(){
        this.sum1= this.plus.num1-this.plus.num2-this.plus.num3-this.plus.num4;
        console.log("minus ="+this.sum1);
    }

    multiple(){
        this.m_result= this.sum1*this.plus.sum;
        console.log(this.m_result);
        //console.log(this.sum1);
    }
}


