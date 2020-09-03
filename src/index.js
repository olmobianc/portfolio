import { makeSmoothScrolling } from "../src/js/makeSmoothScrolling"
import { addBorder } from "../src/js/addNavabarBorder"

// Scroll to section on link click
document.addEventListener('DOMContentLoaded', makeSmoothScrolling);
document.addEventListener('scroll', addBorder);

export { makeSmoothScrolling }
export { addBorder }

