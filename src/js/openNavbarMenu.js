const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const navLinks = document.getElementsByClassName("nav-link");
const body = document.querySelector("body");
const title = document.getElementsByClassName("header-logo");
let menuOpen = false;

menuButton.addEventListener("click", openMenu);

export function openMenu() {
    if(menuOpen == false) {

        //TABLET
        menu.classList.add("menu-active");
        menuButton.classList.add("open");
        body.classList.add("no-overflow");
        menuOpen = true;

        //MOBILE
        title[0].classList.add("hidden");

        //LINKS
        for(let i = 0; i < navLinks.length; i++) {
            navLinks[0].addEventListener("click", function() {
                menu.classList.remove("menu-active");
                menuButton.classList.remove("open");
                body.classList.remove("no-overflow");
                title[0].classList.remove("hidden");
            });
        }
    }
    else {
        //TABLET
        menu.classList.remove("menu-active");
        menuButton.classList.remove("open");
        body.classList.remove("no-overflow");
        menuOpen = false;

        //MOBILE
        title[0].classList.remove("hidden");
    }
}