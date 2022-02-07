var numArr=[];

function nhapso(){
  var numEle=document.querySelector("#mang").value*1;
  numArr.push(numEle);
  console.log(numArr);
}
function doiso(){
    var c=numArr[0];
    for(var i=0;i<numArr.length;i++){
        for(var j=i;j<numArr.length;j++){
            if(numArr[i]>numArr[j]){
                c=numArr[i];
                numArr[i]=numArr[j];
                numArr[j]=c;
            }
        }
    }
    var xuatPhanTu=`<div>Sắp xếp lại mảng ta được: ${numArr} </div>`;
    document.querySelector(".xuatso").innerHTML=xuatPhanTu;
}