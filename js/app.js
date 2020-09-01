//function that add border to navbar on scroll
const navbar = document.getElementById("header");

document.addEventListener('scroll', addBorder);
function addBorder(e) {
    e.preventDefault();   
    
    navbar.classList.add("border-bottom-added");
}

//function that makes scrolling smooth
function makeSmoothScrolling() {
    const navlinks = document.getElementsByClassName("nav-link");
    for(let i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }    
}

// Add class 'active' to section when near top of viewport
function makeActiveClasses() {
    for(const section of sections) {
        const rect = section.getBoundingClientRect(); //get Rectangle container for each section

        //adding active class to the sections

        //mobile first
        let w = window.innerWidth;
        if(w < 600) {
            if(rect.bottom <= window.innerHeight + 600) {
                section.classList.add("your-active-class");
                var whichSection = section.getAttribute("id");
            }
            else {
                section.classList.remove("your-active-class");
            }
        //tablet and desktop    
        } else {
            if(rect.bottom <= window.innerHeight) {
                section.classList.add("your-active-class");
                var whichSection = section.getAttribute("id");
            }
            else {
                section.classList.remove("your-active-class");
            }
        }
        
        //adding active class to the navbar Links
        const navlinks = document.getElementsByClassName("navLinks");
        for(let i = 0; i < navlinks.length; i++) {
            if(whichSection == `section${i+1}`) {
                navlinks[i].classList.add("active");
            }
            else {
                navlinks[i].classList.remove("active");
            }
        }
    }
}

/* FUNCTIONS CALLS */

// Scroll to section on link click
document.addEventListener('DOMContentLoaded', function(e) {
    makeSmoothScrolling();
});


