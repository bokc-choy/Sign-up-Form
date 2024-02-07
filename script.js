const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

password.addEventListener("input", function(){
    if(password.value == confirmPassword.value && password.value != ""){
        valid();
    }
    else{
        invalid();
    }
})

confirmPassword.addEventListener("input", function(){
    if(password.value == confirmPassword.value && confirmPassword.value != ""){
        valid();
    }
    else{
        invalid();
    }
})

function valid(){
    password.classList.add('valid');
    password.classList.remove('invalid');
    confirmPassword.classList.add('valid');
    confirmPassword.classList.remove('invalid');
}

function invalid(){
    password.classList.remove('valid');
    password.classList.add('invalid');
    confirmPassword.classList.remove('valid');
    confirmPassword.classList.add('invalid');
}