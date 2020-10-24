const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const navLinks = document.getElementsByClassName("header-element");
const body = document.querySelector("body");
const title = document.getElementsByClassName("header-logo");
let menuOpen = false;

menuButton.addEventListener("click", openMenu);

export function openMenu() {
    if(menuOpen === false) {

        //TABLET
        menu.classList.add("menu-active");
        menuButton.classList.add("open");
        body.classList.add("no-overflow");

        //MOBILE
        title[0].classList.add("hidden");

        //LINKS
        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function() {
                menu.classList.remove("menu-active");
                menuButton.classList.remove("open");
                body.classList.remove("no-overflow");
                title[0].classList.remove("hidden");
                menuOpen = false;
            });
        }
        menuOpen = true;
        console.log("You just clicked, the menu is now open", menuOpen)
    }
    else {
        menuOpen = false;
        console.log("Now its closed", menuOpen)
        //TABLET
        menu.classList.remove("menu-active");
        menuButton.classList.remove("open");
        body.classList.remove("no-overflow");

        //MOBILE
        title[0].classList.remove("hidden");
    }
}