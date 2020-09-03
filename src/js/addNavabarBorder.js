// Function that add border to navbar on scroll
document.addEventListener('scroll', addBorder);
export function addBorder(e) {
    e.preventDefault();
    const navbar = document.getElementById("header");
    
    navbar.classList.add("border-bottom-added");
}