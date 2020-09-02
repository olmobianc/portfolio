// Function that makes scrolling smooth
function makeSmoothScrolling() {
    for(let i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }    
}