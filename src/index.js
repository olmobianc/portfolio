import { makeSmoothScrolling } from "../src/js/makeSmoothScrolling"
import { addBorder } from "../src/js/addNavabarBorder"
import { addResumeArrow } from "../src/js/resumeCanvas"
import "./styles/main.scss"

document.addEventListener('DOMContentLoaded', makeSmoothScrolling);
document.addEventListener('scroll', addBorder);
document.addEventListener('DOMContentLoaded', addResumeArrow);

export { makeSmoothScrolling }
export { addBorder }
export { addResumeArrow }

