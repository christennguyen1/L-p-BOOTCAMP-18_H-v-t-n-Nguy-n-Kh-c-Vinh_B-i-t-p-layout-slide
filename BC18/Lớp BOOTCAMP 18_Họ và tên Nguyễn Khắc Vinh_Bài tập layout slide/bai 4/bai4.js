var numArr=[];

function tongSo(arr){
    var s=arr[0];
    arr.map(function(item){
        if(item<s && item>0){
            s=item;
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
      var xuatPhanTu=`<div>Số dương nhỏ nhất trong mảng là: ${demSo} </div>`;
      document.querySelector(".xuatso").innerHTML=xuatPhanTu;
    }