var navbar = document.getElementById("header");
var lastScroll = 0;

window.addEventListener('DOMContentLoaded', _ => {
    // Event listener to add function to existing HTML DOM element
    document.addEventListener('scroll', addBorder);
});

lastScroll = window.pageYOffset;
function addBorder(e) {
    e.preventDefault();

    console.log(lastScroll);

    if(lastScroll != 0) { //if the page is scrolled
        navbar.classList.add("border-bottom-added");
    } 
    else {
        navbar.classList.remove("border-bottom-added");
    }
    
}