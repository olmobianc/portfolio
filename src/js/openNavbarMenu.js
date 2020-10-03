const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", openMenu);

export function openMenu() {
    menu.style.display = "block";
}