import { makeSmoothScrolling } from "../src/js/makeSmoothScrolling"
import { addBorder } from "../src/js/addNavabarBorder"
import { makeActiveClasses } from "../src/js/addActiveClass"
import { submitForm } from "../src/js/storeData"
import "./styles/main.scss"

document.addEventListener('DOMContentLoaded', makeSmoothScrolling);
document.addEventListener('scroll', makeActiveClasses);
document.addEventListener('scroll', addBorder);
document.addEventListener('DOMContentLoaded', submitForm);

export { makeSmoothScrolling }
export { makeActiveClasses }
export { addBorder }
export { submitForm }
