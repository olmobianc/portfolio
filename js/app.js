//function that add border to navbar on scroll
const navbar = document.getElementById("header");

document.addEventListener('scroll', addBorder);
function addBorder(e) {
    e.preventDefault();   
    
    navbar.classList.add("border-bottom-added");
}


