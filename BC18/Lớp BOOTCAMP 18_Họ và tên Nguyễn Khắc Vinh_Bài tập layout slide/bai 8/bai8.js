var numArr=[];

function songuyento(n){
    if(n<2){
        return false;
    }
    else{
        for(var i=2;i<n;i++){
            if(n%i==0){return false;}
        }
    }
    return true;
}

function ktsonguyeto(arr){
    var s=-1;
    arr.map(function(item){
       if(songuyento(item)==true && s==-1){
           s=item;
       }
    });
return s;
}

function nhapso(){
  var numEle=document.querySelector("#mang").value*1;
  numArr.push(numEle);
  console.log(numArr);
}
function doiso(){
    var vitriEle1=ktsonguyeto(numArr);
    var xuatPhanTu=`<div>Số nguyên tố đầu tiên trong mảng là: ${vitriEle1} </div>`;
    document.querySelector(".xuatso").innerHTML=xuatPhanTu;
}