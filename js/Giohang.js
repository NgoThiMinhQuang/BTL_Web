function addToCart(item) {
    // debugger;
    item.quantity = 1;
    console.log(item.quantity);
    var list;
    if (localStorage.getItem('cart') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('cart')) || [];
        let ok = true;
        for (let x of list) {
            if (x.id == item.id) {
                x.quantity += 1;
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));

    alert("Đã thêm giỏ hàng thành công!");
    LoadData();
}
function LoadData() {
    var list = JSON.parse(localStorage.getItem('cart')) || [];
    var str = "";
    var t = 0;
    for (let x of list) {
        t += x.price * x.quantity;
        str += `<tr>
                    <td style="display: flex;align-items: center;" ><img 
                                            src="`+ x.image + `" alt="iPhone">
                                        `+ x.name + `</td>
                    <td></td>
                    <td>`+ x.price + `</td>
                    <td>
                        <button onclick="Giam('${x.id}')" style="margin-right: 0;border: none; background-color: #F3F4F6;cursor: pointer;">-</button>
                        <input id="q_${x.id}" onchange="updateQuantity('${x.id}')" style="margin-right: 0;border: none; background-color: #F3F4F6;cursor: pointer;width: 30px;text-align: center;" type="text" value="${x.quantity}" class="txtbox-count">
                        <button onclick="Tang('${x.id}')" style="margin-right: 0;border: none; background-color: #F3F4F6;cursor: pointer;">+</button>
                    </td>
                    <td>`+ (x.price * x.quantity) + `</td>
                    <td>
                        <button onclick="Xoa('${x.id}')" style="border: none;cursor: pointer;"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>`;
    }
    document.getElementById("listCart").innerHTML = str;
    $("#spTong").text(t + "đ");
    $("#tTong").text(t + "đ");
}

function XoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
        localStorage.setItem('cart', null);
        location.reload();
    }
}
function Tang(id) {
    var list = JSON.parse(localStorage.getItem('cart')) || [];
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 ) {
        list[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(list));
    }
    LoadData();
}

function Giam(id) {
    var list = JSON.parse(localStorage.getItem('cart')) || [];
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity > 1) {
        list[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(list));
    }
    LoadData();
}

function updateQuantity(id) {
    var list = JSON.parse(localStorage.getItem('cart')) || [];
    var quantity = Number($('#q_' + id).val());
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && quantity >= 1) {
        list[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(list));
    }
    LoadData();
}

function Xoa(id) {
    var list = JSON.parse(localStorage.getItem('cart')) || [];
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
        var index = list.findIndex(x => x.id == id);
        if (index >= 0) {
            list.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(list));
        }
        LoadData();
    }
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
}

function ThanhToan() {
    const isLoggedIn = localStorage.getItem("currentUser") !== null;
    if(isLoggedIn){
        
        window.location.href = "ThanhToan.html";
        
    }
    else{
        alert("Chưa đăng nhập.Vui lòng đăng nhập để thanh toán!");
        window.location.href = "DangNhap.html";
        
    }
    // window.location.href = "/thanhtoan.html";
}
function SanPham() {
    window.location.href = "SanPham.html";
}
LoadData();