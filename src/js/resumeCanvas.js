export function addResumeArrow() {
    var c = document.getElementById("canvas");
    c.width = window.innerWidth;
    var w = c.width;
    c.height = window.innerHeight;
    var ctx = c.getContext("2d");
 

    ctx.moveTo(w/2, 20); //start coordinates
    ctx.lineTo(w/2, 800); //end coordinates
    ctx.strokeStyle = "white";
    ctx.stroke(); //needed to actually see the line
    
}