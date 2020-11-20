'use-strict';
const arr = new Array;

function insertArr(){
    let i = 0;
    for(i=0; i<=99; i++){   // 배열 생성
        arr[i]=i+1;
    }
}

function delArr(){
    let k;
    for(k=0; k<arr.length; k++){
        if(k%2==0){    // 홀수 번째 데이터 삭제
            arr.splice(arr[k],1,"");
        }
    }
    console.log(arr);
}
insertArr();
delArr();