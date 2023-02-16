const password1 = document.getElementById('password');
const password2 = document.getElementById('password-confirm');

function passwordCheck() {
    pass1 = password1.value;
    pass2 = password2.value;

    if (pass1 === pass2) {
        return true;
    } else {
        return false;
    }
}