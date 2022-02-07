var numArr=[];

function tongSo(arr){
    var s=0;
    arr.map(function(item){
        if(item>0){
            s++;
        }
    });
    return s;
}
function nhapso(){
    var numEle=document.querySelector("#user").value*1;
    numArr.push(numEle);
    console.log({numArr});
  }
  function doiso(){
    var demSo=tongSo(numArr);
      var xuatPhanTu=`<div>Tổng số dương trong mảng là: ${demSo} </div>`;
      document.querySelector(".xuatso").innerHTML=xuatPhanTu;
    }