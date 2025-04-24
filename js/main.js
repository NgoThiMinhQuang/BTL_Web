function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
$(document).ready(function () {

    const Users = JSON.parse(localStorage.getItem("Users")) || [];
    if (Users.length == 0) {
        const defaultUser = {
            fullname: "Ngô Thị Minh Quang",
            tk: "admin",
            mk: "admin123"
        };
        Users.push(defaultUser);
        localStorage.setItem("Users", JSON.stringify(Users));
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
    if(currentUser) {
        $("#auth-options1").css("display", "none");
        $("#auth-options2").css("display", "none");
        $("#logout-option").css("display", "block");
        const a = $("#logout-option #infor-acc").html();
        $("#logout-option>a").html(a + currentUser.fullname);
        $("#logout-option").css("display", "flex");
        $("#logout-option").css("gap", "5px");
        $("#logout-option").css("align-items", "center");
        $("#logout-option").css("color", "white");
    }
    else{
        $("#auth-options1").css("display", "block");
        $("#auth-options2").css("display", "block");
        $("#logout-option").css("display", "none");
    }
});

function showAdmin() {
    window.location.href = "Admin.html";
}

$("#admin_panel").click(function () {
    showAdmin();
});