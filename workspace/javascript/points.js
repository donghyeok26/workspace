export class Points{
     constructor(x,y){
        this.x = x;
        this.y = y;
        this.fixedY =y;
        this.speed = 0.1;
        this.cur = 0;    
        this.max = Math.random()*150;
    }

    update(){
       // console.log(this.fixedY);
       // console.log(this.max);
    //    console.log(this.cur);
        //console.log(Math.sin(this.cur));
        this.cur += this.speed;
        this.y = this.fixedY+(Math.sin(this.cur)*this.max); // ceter y + (sin 함수 에 0.1)*max (150*0.0~1.0)
    }
    update(){
        // console.log(this.fixedY);
        // console.log(this.max);
     //    console.log(this.cur);
         //console.log(Math.sin(this.cur));
         this.cur += this.speed;
         this.y = this.fixedY+(Math.sin(this.cur)*this.max); // ceter y + (sin 함수 에 0.1)*max (150*0.0~1.0)
     }
                       
}