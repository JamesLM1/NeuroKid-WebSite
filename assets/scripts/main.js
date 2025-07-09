const btn = document.querySelector(".menu-toggle");

const menu = document.querySelector("nav ul");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});