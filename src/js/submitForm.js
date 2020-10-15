import { storeData } from "../index"

const confirmationMessage = document.getElementById("success-message-container");
const form = document.getElementById("contact-form");
form.addEventListener("submit", submitForm);

//Submit Form
export function submitForm(e) {
    e.preventDefault();

    //Get Values
    const name = getInputValues('form-name');
    const email = getInputValues('form-email');
    const subject = getInputValues('form-subject');
    const answer = getInputValues('location');
    const message = getInputValues('form-body');

    storeData(name, email, subject, answer, message);

    //Show message after 1 sec
    setTimeout(function() {
        confirmationMessage.style.visibility = "visible";
    },1000);

    //Hide message after 4 sec
    setTimeout(function() {
        confirmationMessage.style.visibility = "hidden";
    },4000);

    //Reset Form
    form.reset();
}

//Function to get input values
function getInputValues(id) {
    return document.getElementById(id).value;
}