const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const navLinks = document.getElementsByClassName("nav-link");
const body = document.querySelector("body");
let menuOpen = false;

menuButton.addEventListener("click", openMenu);

export function openMenu() {
    if(menuOpen == false) {
        menu.classList.add("menu-active");
        menuButton.classList.add("open");
        //body.style.overflow = "hidden";
        menuOpen = true;

        for(let i = 0; i < navLinks.length; i++) {
            navLinks[0].addEventListener("click", function() {
                console.log(i)
                menu.classList.remove("menu-active");
                menuButton.classList.remove("open");
            });
        }
    }
    else {
        menu.classList.remove("menu-active");
        menuButton.classList.remove("open");
        //body.style.overflow = "visible";
        menuOpen = false;
    }
    
}