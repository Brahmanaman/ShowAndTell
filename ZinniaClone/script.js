
const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const header = document.getElementById("header");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    document.body.classList.add("no-scroll");
    header.classList.remove("glass-navbar");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    document.body.classList.remove("no-scroll");
    header.classList.add("glass-navbar");
});
