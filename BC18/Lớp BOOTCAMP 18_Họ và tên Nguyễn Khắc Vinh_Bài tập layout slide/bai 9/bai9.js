var numArr=[];

function nhapso(){
  var numEle=document.querySelector("#mang").value*1;
  numArr.push(numEle);
  console.log(numArr);
}
function doiso(){
    var dem=0;
    for(var i=0;i<numArr.length;i++){
        if(numArr[i]%2==0 || numArr[i]%2==1 || numArr[i]%2==-1){
            dem++;
        }
    }
    var xuatPhanTu=`<div>Tổng số nguyên trong mảng là: ${dem} </div>`;
    document.querySelector(".xuatso").innerHTML=xuatPhanTu;
}