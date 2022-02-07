var numArr=[];

function tongSoDuong(arr){
    var s=0;
    arr.map(function(item){
        if(item>0){
            s+=item;
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
    var tongDuong=tongSoDuong(numArr);
    var xuatPhanTu=`<div>Tổng số dương trong mảng là: ${tongDuong} </div>`;
    document.querySelector(".xuatso").innerHTML=xuatPhanTu;
  }