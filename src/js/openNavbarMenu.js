const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", openMenu);

export function openMenu() {
    menu.style.display = "block";
    //body.style.overflow = "hidden";
}