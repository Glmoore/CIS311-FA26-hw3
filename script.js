// 1) grab the elements you want to interact with
const toast = document.getElementById("toast")
const submitButton = document.getElementById("submitButton")
const form = document.getElementById('contact-form');

// 2) connect to the event that you want to listen for
submitButton.addEventListener('click', (e) => {
        //3) do the things that you want to do

        /* VVVVVV A bunch of validation Java I'm giving up on. Also, it's scary how an ai offered to fix it all with incredible accuracy. But, I chose to leave the javascript as written. VVVVVV */

        /* const firstName = document.getElementById("first-name");
        const firstNameError = document.getElementById("first-name-error");

        if (firstName.value.trim() === "") {
        firstNameError.classList.add("visible");
        } else {
        firstNameError.classList.remove("visible");
        }

        const lastName = document.getElementById("last-name");
        const lastNameError = document.getElementById("last-name-error");

        if (lastName.value.trim() === "") {
        lastNameError.classList.add("visible");
        } else {
        lastNameError.classList.remove("visible");
        }

        const Email = document.getElementById("email");
        const emailError = document.getElementById("email-error");

        if (Email.value.trim() === "") {
        emailError.classList.add("visible");
        } else {
        emailError.classList.remove("visible");
        }

        const Query = document.getElementById("query");
        const queryError = document.getElementById("query-error");

        if (Query.value.trim() === "") {
        queryError.classList.add("visible");
        } else {
        queryError.classList.remove("visible");
        }

        const Message = document.getElementById("message");
        const messageError = document.getElementById("message-error");

        if (Message.value.trim() === "") {
        messageError.classList.add("visible");
        } else {
        messageError.classList.remove("visible");
        } */



        // trigger browser validations (bubbles)
        if (!form.reportValidity()) return
    
        // don't actually submit the form
        e.preventDefault()
        

        showToast(1000)
    })

let hideTimer

function showToast(duration = 2000) {
    toast.showPopover()
    restartTimer(duration)
}

function restartTimer(duration = 2000) {
    clearTimeout(hideTimer)
    hideTimer = setTimeout( ()=> toast.hidePopover(), duration)
}

toast.addEventListener('pointerenter', ()=> clearTimeout(hideTimer))
toast.addEventListener('pointerleave', ()=> restartTimer())