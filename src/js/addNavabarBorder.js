// Function that add border to navbar on scroll
document.addEventListener('scroll', addBorder);
function addBorder(e) {
    e.preventDefault();   
    
    navbar.classList.add("border-bottom-added");
}