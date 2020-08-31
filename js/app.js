var navbar = document.getElementById("header");

document.addEventListener('scroll', addBorder);
function addBorder(e) {
    e.preventDefault();   
    
    navbar.classList.add("border-bottom-added");  
}