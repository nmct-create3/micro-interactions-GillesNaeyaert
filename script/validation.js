let email = {},
password = {},
signtInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const getDOM = function(){
    email.field = document.querySelector('.js-email-field');
    email.input = document.querySelector('.js-email-input');
    email.errorMessage = document.querySelector('.js-email-error-message');

    password.field = document.querySelector('.js-password-field');
    password.input = document.querySelector('.js-password-input');
    password.errorMessage = document.querySelector('.js-password-error-message');

    signtInButton = document.querySelector('.js-sign-in-button');
};

const addErrors = function(field){
    field.classList.add('has-error');
};

const removeErrors = function(field){
    field.classList.remove('has-error');
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

const doubleCheckEmail = function(){
    if(isValidEmailAddress(email.input.value)){
        removeErrors(email.field);
        email.input.removeEventListener('input', doubleCheckEmail);
    }else {
        if(isEmpty(email.input.value)){
            email.errorMessage.innerHTML = 'The field is required';
        }else
        {
            email.errorMessage.innerHTML = 'The field is not valid'
        }
    }
 };

const enableInteraction = function(){
    //blur listener aan email veld hangen
    email.input.addEventListener('blur', function(event){
        const typedInput = event.target.value;

        if(!isValidEmailAddress(typedInput)){
            addErrors(email.field);
            if(isEmpty(typedInput)){
                email.errorMessage.innerHTML = 'The field is required';
            }else
            {
                email.errorMessage.innerHTML = 'The field is not valid';
            }
            email.input.addEventListener('input', doubleCheckEmail);
        }
    });


    //blur listener aan password veld hangen 
    password.input.addEventListener('blur', function(event){

    });
    //click-event aan button hangen
};

document.addEventListener('DOMContentLoaded', function(){
    console.log('Good to go');
    getDOM();
    enableInteraction();
});