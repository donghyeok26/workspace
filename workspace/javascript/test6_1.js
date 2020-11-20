    'use strict'

    var arr = [];
    function every() {
      let i = 0;
      for (i = 0; i <= 99; i++) {
        arr[i] = i + 1;
        document.write(arr[i] + " ");
        //console.log(arr[i] + " ");
      }
    }

    function del(){
      let i =0;
      for(i=0; i < arr.length; i++){
          if(i % 2 ==0) 
          {// 인덱스가 0, 2, 4라면
              arr.splice(i,1 ,0);
          }
      }
      select();
    }

    function select() {
      let i;
      for (i = 0; i < arr.length; i++) {
        //console.log(arr[i] + " ");
        document.write(arr[i] + " ");
      }
      //console.log("홀수 데이터 초기화됨");
      //console.log("<a href='move3.html'돌아가기</a>");
    }
    every();