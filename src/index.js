import { makeSmoothScrolling } from "../src/js/makeSmoothScrolling"
import { addBorder } from "../src/js/addNavabarBorder"
import "./styles/main.scss"

document.addEventListener('DOMContentLoaded', makeSmoothScrolling);
document.addEventListener('scroll', addBorder);

export { makeSmoothScrolling }
export { addBorder }

