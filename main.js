const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


function emailValidator() {
    let emailInput = document.getElementById("email-input");

    // DOMS to manipulate when there's an encountered error
    let inputBox = document.getElementById("input_box");
    let icon = document.getElementById("icon");
    let error_section = document.getElementById("error_section");
    let contact_btn = document.getElementById("contact_btn");

    function defaultStyling() {
        // for input box
        inputBox.style.border = "none";
        inputBox.style.borderBottomLeftRadius = "none";
        inputBox.style.borderBottomRightRadius = "none";
        // fot the icon
        icon.style.display = "none"
        // for error_section
        error_section.style.display = "none"
        // for contact_btn
        contact_btn.style.top = "-50px"
    }


    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.trim().match(emailformat)) {
        console.log("Correct Person!!!")
        defaultStyling()
    }  else {
        console.log("Bad...");
        // for input box
        inputBox.style.border = "2px solid salmon";
        inputBox.style.borderBottomLeftRadius = "10px";
        inputBox.style.borderBottomRightRadius = "10px";
        // fot the icon
        icon.style.display = "flex"
        // for error_section
        error_section.style.display = "block"
        // for contact_btn
        contact_btn.style.top = "0px"
    }
}

// emailValidator() 





// const form = document.getElementById('form');
// const email = document.getElementById('email');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs() {
//     //trim to remove white spaces
//     const emailValue = email.Value.trim();

//     if (emailValue === '') {
//         setErrorFor(whoops, "make sure its an email");
//     } else {
//         setSuccessFor(email);
//     }
    
// }

// function setErrorFor(input, message) {
//     const form = input.parentElement;
//     const small = form.querySelector('small');
//     form.className = 'form error';
//     small.innerText = message;
// }

// function setSuccessFor(input) {
//     const form = input.parentElement;
//     form.className = 'form success';
// }

// function isEmail(email) {
//     return /
// }
