const form = document.forms[0];
const emailInput = form.email;
const errorPara = document.querySelector(".error");

function validateEmail(event) {
    let regex = /^(?<user>\w+?)@(?<mail>\w+?)\.(?<tld>[a-z]{2,})$/i
    let errorMsg = "";
    let isValid =  true;

    event.preventDefault(); 

    const email = emailInput.value.trim();

    if(email === "") {
        errorMsg = "Whoops! It looks like you forgot to add your email";
        isValid = false;
    } else {
        isValid = email.match(regex) !== null;
    }

    
    if(!isValid) {
        if(errorMsg === "") {
            errorMsg = "Please provide a valid email address";
        }
        emailInput.classList.add("error");
        errorPara.classList.add("show");
        errorPara.textContent = errorMsg;
    } else {
        emailInput.classList.remove("error");
        errorPara.classList.remove("show");
    }
}

form.addEventListener("submit", validateEmail);