import { makeSmoothScrolling } from "../src/js/makeSmoothScrolling"
import { addBorder } from "../src/js/addNavabarBorder"
import { makeActiveClasses } from "../src/js/addActiveClass"
import { openMenu } from "../src/js/openNavbarMenu"
import { initMap } from "../src/js/initMap"
import { submitForm } from "../src/js/submitForm"
import * as firebase from "firebase/app";
import "firebase/database"
import "./styles/main.scss"

document.addEventListener('DOMContentLoaded', makeSmoothScrolling);
document.addEventListener('scroll', makeActiveClasses);
document.addEventListener('scroll', addBorder);

var firebaseConfig = {
        apiKey: "AIzaSyD96850tS2xjFVTxO9kFxgHBPxiKH8XVbw",
        authDomain: "contactform-59115.firebaseapp.com",
        databaseURL: "https://contactform-59115.firebaseio.com",
        projectId: "contactform-59115",
        storageBucket: "contactform-59115.appspot.com",
        messagingSenderId: "866095848989",
        appId: "1:866095848989:web:4462d650a11041f802b0f4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var messagesRef = database.ref('messages');
// Save message to firebase
export function storeData(name, email, subject, answer, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            subject: subject,
            answer: answer,
            message: message
        });
}

export { makeSmoothScrolling }
export { makeActiveClasses }
export { addBorder }
export { openMenu }
export { initMap }
export { submitForm }
