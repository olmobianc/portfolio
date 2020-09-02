/**^ GLOBAL VARIABLES ***/
const navbar = document.getElementById("header");
const sections = document.getElementsByClassName("section-container");
const navlinks = document.getElementsByClassName("nav-link");

/*** FUNCTIONS DECLARATIONS ***/


/*** FUNCTIONS CALLS ***/

// Scroll to section on link click
document.addEventListener('DOMContentLoaded', function(e) {
    makeSmoothScrolling();
});

// Set sections as active
document.addEventListener('scroll', function(e) {
    makeActiveClasses();
});

