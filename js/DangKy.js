$(document).ready(function () {
    $("#Dang_ky").click(function () { 
        const fullname = $("#fullname").val();
        const tk = $("#tk").val();
        const mk = $("#mk").val();
        const mk2 = $("#mk2").val();

        if( fullname == "" || tk == "" || mk == "" || mk2 == "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        if(mk != mk2) {
            alert("Mật khẩu không khớp!");
            return;
        }

        const Users = JSON.parse(localStorage.getItem("Users")) || [];

        const user = {
            fullname: fullname,
            tk: tk,
            mk: mk
        }

        for (let i = 0; i < Users.length; i++) {
            if (Users[i].tk == tk) {
                alert("Tài khoản đã tồn tại!");
                return;
            }
        }

        Users.push(user);
        localStorage.setItem("Users", JSON.stringify(Users));
        alert("Đăng ký thành công!");
        window.location.href = "DangNhap.html";
    });
});