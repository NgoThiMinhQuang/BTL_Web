var dsanh = [
    "./img/imgTrangChu/nen1.jpg",
    "./img/imgTrangChu/SanPham2.jpg",
    "./img/imgTrangChu/SanPham1.jpg",
];
var stt = 0;

// Hàm chuyển ảnh sang trái
function left() {
    stt--;
    if (stt < 0) stt = dsanh.length - 1;
    var anh = document.getElementById("img-jpg");
    anh.src = dsanh[stt];
}

// Hàm chuyển ảnh sang phải
function right() {
    stt++;
    if (stt > dsanh.length - 1) stt = 0;
    var anh = document.getElementById("img-jpg");
    anh.src = dsanh[stt];
}

// Hàm tự động chạy slideshow
function autoSlide() {
    stt++;
    if (stt > dsanh.length - 1) stt = 0;
    var anh = document.getElementById("img-jpg");
    anh.src = dsanh[stt];
}

// Gọi hàm autoSlide mỗi 3 giây
setInterval(autoSlide, 3000);


// 2 ảnh dưới
var dsanh1=
[
    "./img/imgTrangChu/GiayIn.jpg",
    "./img/imgTrangChu/SanPham3.jpg",
    "./img/imgTrangChu/KhuyenMai.jpg",
    "./img/imgTrangChu/ButVe.jpg"

];

var stt1 = 0; // Chỉ số ảnh đầu tiên
var stt2 = 1; // Chỉ số ảnh thứ hai

// Hàm chuyển ảnh sang trái
function left1() {
    stt1--;
    stt2--;
    if (stt1 < 0) stt1 = dsanh1.length - 1;
    if (stt2 < 0) stt2 = dsanh1.length - 1;

    var anh1 = document.getElementById("img_GiayIn");
    var anh2 = document.getElementById("img_ButVe");
    anh1.src = dsanh1[stt1];
    anh2.src = dsanh1[stt2];
}

// Hàm chuyển ảnh sang phải
function right1() {
    stt1++;
    stt2++;
    if (stt1 > dsanh1.length - 1) stt1 = 0;
    if (stt2 > dsanh1.length - 1) stt2 = 0;

    var anh1 = document.getElementById("img_GiayIn");
    var anh2 = document.getElementById("img_ButVe");
    anh1.src = dsanh1[stt1];
    anh2.src = dsanh1[stt2];
}

// Hàm tự động chạy slideshow cho 2 ảnh
function autoSlide1() {
    right1(); // Gọi hàm chuyển ảnh sang phải
}

// Gọi hàm autoSlide1 mỗi 3 giây
setInterval(autoSlide1, 3000);