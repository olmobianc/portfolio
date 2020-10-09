//import { database } from "../index"
//var messagesRef = database.ref('messages');
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
    const answer = getInputValues('form-anti-bots-answer');
    const message = getInputValues('form-body');

    storeData(name, email, subject, answer, message);

    //Show message after 0.5 sec
    setTimeout(function() {
        confirmationMessage.style.visibility = "visible";
    },500);

    //Hide message after 3 sec
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