// 1) grab the elements you want to interact with
const toast = document.getElementById("toast")
const submitButton = document.getElementById("submitButton")
const form = document.getElementById('contact-form');

// 2) connect to the event that you want to listen for
submitButton.addEventListener('click', (e) => {
        //3) do the things that you want to do

        
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