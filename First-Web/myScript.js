var btnChao = document.getElementById("btnChao");

btnChao.addEventListener("click", function() {
    var txtTen = document.getElementById("txtTen");
    var ten = txtTen.value;
    alert("Xin Chào Bạn " + ten);
});

var btnTuoi = document.getElementById("btnTuoi");

btnTuoi.addEventListener("click", function(){
    var txtNS = document.getElementById("txtNS");
    var ns = txtNS.value;
    // isNAN(): hàm is not a number
    if (isNaN(ns)) { 
        alert("Nhập số cho năm sinh");
    } else {
        var date = new Date(); //tạo ra lớp Date có sẵn trong js
        var currentYear = date.getFullYear();
        var tuoi = currentYear - ns;
        alert("Tuổi = " + tuoi);
    }
});