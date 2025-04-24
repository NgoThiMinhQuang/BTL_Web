$(document).ready(function () {
    $("#login_btn").click(function () { 
        const Users = JSON.parse(localStorage.getItem("Users")) || [];
        const username = $("#tk").val();
        const password = $("#mk").val();
        

        const user = Users.find(user => user.tk === username && user.mk === password);
        if (user) {
            alert("Đăng nhập thành công!");
            window.location.href = "index.html";
            localStorage.setItem("currentUser", JSON.stringify(user));
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    });
});