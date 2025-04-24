document.addEventListener('DOMContentLoaded', function() {
    const slideList = document.querySelector('.slide_list');
    const slides = document.querySelectorAll('.img_chitietsp');
    const nextBtn = document.querySelector('.next_btn');
    const prevBtn = document.querySelector('.pre_btn');
    const options = document.querySelectorAll('.option');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    // Hàm cập nhật slider
    function updateSlider() {
        slideList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    // Hàm previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Xử lý click nút next
    nextBtn.addEventListener('click', nextSlide);

    // Xử lý click nút previous
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide (tùy chọn)
    let autoSlide = setInterval(nextSlide, 5000);

    // Dừng auto slide khi hover vào slider
    slideList.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    // Tiếp tục auto slide khi rời chuột
    slideList.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });


    // Xử lý click vào option
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Xóa selected từ tất cả options
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Thêm selected vào option được click
            this.classList.add('selected');
            
            // Lấy đường dẫn ảnh từ thẻ img trong option
            const newImageSrc = this.querySelector('img').src;
            
            // Cập nhật ảnh đầu tiên trong slide_list
            if (slides.length > 0) {
                slides[0].src = newImageSrc;
                currentIndex = 0;
                updateSlider();
            }
        });
    });

    // Xử lý nút Next
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    // Xử lý nút Previous
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById("btnAddToCart");
    if (addBtn) {
        addBtn.addEventListener("click", function () {
            const name = document.querySelector(".tieude2 h2")?.innerText.trim() || "Sản phẩm không tên";
            const priceText = document.querySelector(".tieude2 h3")?.innerText.replace(/[^\d]/g, '') || "0";
            const price = parseInt(priceText, 10);
            const image = document.querySelector(".img_chitietsp")?.src || "";

            const id = name.replace(/\s+/g, '-').toLowerCase(); // tạo ID duy nhất từ tên

            const item = {
                id: id,
                name: name,
                price: price,
                image: image
            };

            if (typeof addToCart === 'function') {
                addToCart(item);
            } else {
                alert("Lỗi: Không tìm thấy hàm addToCart.");
            }
        });
    }
});
