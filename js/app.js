var navbar = document.getElementById("header");
var timer = null;

document.addEventListener('DOMContentLoaded', _ => {
    // Event listener to add function to existing HTML DOM element
    window.addEventListener('scroll', addBorder);
});

function addBorder(e) {
    e.preventDefault();

    if(timer !== null) {
        clearTimeout(timer);      
        navbar.classList.add("border-bottom-added");  
    }
    timer = setTimeout(function() {
        navbar.classList.remove("border-bottom-added");
    }, 250);
}