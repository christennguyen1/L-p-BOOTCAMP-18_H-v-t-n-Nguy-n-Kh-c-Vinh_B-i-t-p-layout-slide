var numArr = [];

function nhapso() {
    var numEle = document.querySelector("#mang").value * 1;
    numArr.push(numEle);
    console.log(numArr);
}
function doiso() {
    var demSoAm = 0;
    var demSoDuong = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] < 0) {
            demSoAm++;
        }
        else if (numArr[i] > 0) {
            demSoDuong++;
        }
    }
    if (demSoAm > demSoDuong) {
        console.log(demSoAm);
        var xuatPhanTu=`<div>Tổng số âm trong mảng là: ${demSoAm} </div>`;
        document.querySelector(".xuatso").innerHTML=xuatPhanTu;
    }
    if (demSoAm < demSoDuong) {
        console.log(demSoDuong);
        var xuatPhanTu=`<div>Tổng số dương trong mảng là: ${demSoDuong} </div>`;
        document.querySelector(".xuatso").innerHTML=xuatPhanTu;
    }
}