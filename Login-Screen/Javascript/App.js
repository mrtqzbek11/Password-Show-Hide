
//* From Mert Özbek



const hideShowButton = document.querySelector('.hide-show');
const passInput = document.querySelector('.pass');
const iconShowHide = document.querySelector('.hs-icon');

hideShowButton.addEventListener('click', ()=> {

    if(passInput.type == 'password') {
        iconShowHide.classList.add('bi-eye-slash-fill')
        passInput.type = 'text';
    }
    else if(passInput.type == 'text') {
        iconShowHide.classList.remove('bi-eye-slash-fill')
        passInput.type = 'password';
    }

})

