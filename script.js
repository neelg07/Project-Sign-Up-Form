// Password Match Validation 

const password = document.getElementById('pass');
const conf = document.getElementById('confirm');

function passMatch() {
    return (password.value === conf.value)
}

password.addEventListener('keyup', () => {

    if (passMatch()) {
        password.setCustomValidity("");
        conf.setCustomValidity("");
    } else {
        password.setCustomValidity("Passwords must match!");
    }
});

password.addEventListener('keyup', (event) => {

    switch (event.key) {
        case 'Backspace':
        case 'Delete':
            if (passMatch()) {
                password.setCustomValidity("");
                conf.setCustomValidity("");
            } else {
                password.setCustomValidity("Passwords must match!");
            }
    }
});

conf.addEventListener('keyup', () => {

    if (passMatch()) {
        password.setCustomValidity("");
        conf.setCustomValidity("");
    } else {
        conf.setCustomValidity("Passwords must match!");
    }
});

conf.addEventListener('keyup', (event) => {

    switch (event.key) {
        case 'Backspace':
        case 'Delete':
            if (passMatch()) {
                password.setCustomValidity("");
                conf.setCustomValidity("");
            } else {
                conf.setCustomValidity("Passwords must match!");
            }
    }
});

const button = document.querySelector('.but');

button.addEventListener('submit', (e) => {

    if (passMatch()) {
        window.location.reload();
    } else {
        e.preventDefault();
    }
});