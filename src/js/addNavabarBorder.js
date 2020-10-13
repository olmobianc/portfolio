const navbar = document.getElementById("header");
let lastScrollTop = 0;
let w = window.innerWidth;


    document.addEventListener('scroll', addBorder);
    export function addBorder(e) {
        navbar.classList.add("border-bottom-added");
        
        var st = window.pageYOffset || document.documentElement.scrollTop;  
        if(w >= 1100) {
            if (st > lastScrollTop){
                navbar.style.top = "-100%";
            } else {
                navbar.style.top = "0";
            }

            lastScrollTop = st;
        }
    }
