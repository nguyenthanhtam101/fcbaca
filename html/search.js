document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.querySelector(".fa-magnifying-glass");
    var cartIcon = document.getElementById("cart-icon");
    var userIcon = document.getElementById("user-icon");

    searchIcon.addEventListener("mouseover", function() {
        cartIcon.classList.add("hidden");
        userIcon.classList.add("hidden");
    });

    searchIcon.addEventListener("mouseout", function() {
        cartIcon.classList.remove("hidden");
        userIcon.classList.remove("hidden");
    });
});
