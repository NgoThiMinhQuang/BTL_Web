// Lấy các phần tử cần thiết
const slides = document.querySelector('.slide_list'); // Container chứa các ảnh
const images = document.querySelectorAll('.slide_list img'); // Tất cả ảnh trong slider
const nextBtn = document.querySelector('.next_btn'); // Nút "Next"
const prevBtn = document.querySelector('.pre_btn'); // Nút "Previous"

let index = 0; // Vị trí hiện tại của slider
const totalImages = images.length; // Tổng số ảnh trong slider

// Hàm hiển thị slider
function showSlider(index) {
    const width = images[0].clientWidth; // Lấy chiều rộng của một ảnh
    slides.style.transform = `translateX(${-index * width}px)`; // Dịch chuyển slider
    slides.style.transition = 'transform 0.5s ease-in-out'; // Hiệu ứng chuyển động
}

// Sự kiện khi nhấn nút "Next"
nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalImages; // Tăng chỉ số, quay lại đầu nếu vượt quá
    showSlider(index);
});

// Sự kiện khi nhấn nút "Previous"
prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages; // Giảm chỉ số, quay lại cuối nếu nhỏ hơn 0
    showSlider(index);
});

// Tự động chạy slider mỗi 5 giây
setInterval(() => {
    index = (index + 1) % totalImages; // Tăng chỉ số
    showSlider(index);
}, 4000);

const thuongHieu = document.querySelector('.ThuongHieu');
const listThuongHieu = document.querySelector('.list_ThuongHieu');

// Hiển thị hoặc ẩn danh sách khi nhấn vào "Thương Hiệu"
thuongHieu.addEventListener('click', () => {
    const isVisible = listThuongHieu.style.display === 'block';
    listThuongHieu.style.display = isVisible ? 'none' : 'block';
});

// Ẩn danh sách khi nhấn ra ngoài
document.addEventListener('click', (e) => {
    if (!thuongHieu.contains(e.target) && !listThuongHieu.contains(e.target)) {
        listThuongHieu.style.display = 'none';
    }
});