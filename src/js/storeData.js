const form = document.getElementById("contact-form");
//Listening for form submission
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

    console.log(name);

}

//Function to get input values
function getInputValues(id) {
    return document.getElementById(id).value;
}