var numArr=[];


function nhapso(){
  var numEle=document.querySelector("#mang").value*1;
  numArr.push(numEle);
  console.log(numArr);
}
function doiso(){
    var vitriEle1=document.querySelector("#vitri1").value*1-1;
    var vitriEle2=document.querySelector("#vitri2").value*1-1;
    var c=0;
    c=numArr[vitriEle1];
    numArr[vitriEle1]=numArr[vitriEle2];
    numArr[vitriEle2]=c;
    var xuatPhanTu=`<div>Sắp xếp lại mảng ta được: ${numArr} </div>`;
    document.querySelector(".xuatso").innerHTML=xuatPhanTu;
}