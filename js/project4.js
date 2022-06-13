console.log('OM')
const name = document.getElementById('names');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validNames = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();

// console.log(email, phone, names);

names.addEventListener('blur', () => {
    console.log('blurred names');
    // validate names here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}/;
    let str = names.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('its matched');
        names.classList.remove('is-invalid');
        validNames = true;

    }
    else {
        console.log("no matched")
        names.classList.add('is-invalid');
        validNames = false;
    }

})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    //Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,9}$/;
    let str = email.value
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Email its matched');
        email.classList.remove('is-invalid');
        validEmail = true;

    }
    else {
        console.log("no Email matched")
        email.classList.add('is-invalid');
        validEmail = false;
    }

})


phone.addEventListener('blur', () => {
    console.log('blurred phone');
    // validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('PHONE its matched');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log("no PHONE matched")
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You have been clicked on sub');
    //submit your from here
    let failure = document.getElementById('failure');

    if (validNames && validEmail && validPhone) {
        console.log('SORRY! phone,e,U, ar valid');

        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // failure.alert('close');
        $('#failure').hide();// This is jquery fun();
        $('#success').show();// This is jquery fun();
        submit.style.background = 'blue'

    }
    else {
        console.log('not valid of one');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        submit.style.background = 'red';
        // success.classList.remove('show');
        // success.alert('close');
        $('#success').hide();// This is jquery fun();
        $('#failure').show();// This is jquery fun();


    }
})



