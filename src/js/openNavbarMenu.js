const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const body = document.querySelector("body");
let menuOpen = false;

menuButton.addEventListener("click", openMenu);

export function openMenu() {
    if(menuOpen == false) {
        menu.style.display = "block";
        menuButton.classList.add('open');
        
        //body.style.overflow = "hidden";
        menuOpen = true;
    }
    else {
        menuButton.classList.remove("open");
        menuOpen = false;
    }
    
}