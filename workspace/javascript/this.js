import{
    This1
}from './this1.js';

class This{
    constructor(m_result){
      this.minu = new This1();
      this.print();
    }
    print(){
        console.log("this1*this2 ="+this.minu.m_result);
    }  
}

window.onload = () => {
    new This();
}



