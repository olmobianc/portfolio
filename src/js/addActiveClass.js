/* Function that add class 'active' to section when near top of viewport
function makeActiveClasses() {
    for (const section of sections) {
        const rect = section.getBoundingClientRect(); //get Rectangle container for each section

        //adding active class to the sections
        //mobile first
        let w = window.innerWidth;
        if(w < 600) {
            if (rect.bottom <= window.innerHeight + 600) {
                section.classList.add("active-class");
                var whichSection = section.getAttribute("id");
            }
            else {
                section.classList.remove("active-class");
            }
        //tablet and desktop    
        } else {
            if (rect.bottom <= window.innerHeight) {
                section.classList.add("active-class");
                var whichSection = section.getAttribute("id");
            }
            else {
                section.classList.remove("active-class");
            }
        }
        
        //adding active class to the navbar Links
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