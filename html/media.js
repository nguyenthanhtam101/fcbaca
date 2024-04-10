/* Hiển thị menu khi màn hình có kích thước lớn hơn hoặc bằng kích thước của laptop hoặc iPad */
@media screen and (min-width: 768px) {
    .menu-items {
        display: flex !important; /* Sử dụng !important để ghi đè lên hiển thị của menu khi màn hình nhỏ hơn */
    }

    #menu-toggle {
        display: none; /* Ẩn biểu tượng dấu ba gạch khi màn hình lớn hơn hoặc bằng kích thước của laptop hoặc iPad */
    }
}
