export class This2{
    constructor(){
        this.num1=10;
        this.num2=20;
        this.num3=30;
        this.num4=40;
        //this.sum=0;
        this.cal();
    }
    cal(){
        this.sum = this.num1+this.num2+this.num3+this.num4;
        console.log("plus ="+this.sum);
    }
}