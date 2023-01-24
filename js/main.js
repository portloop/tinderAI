const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    })
}

document.getElementById('video').play();

let buttons = document.querySelectorAll('button.actionScroll');
let EMAIL_INPUT = document.querySelector('#email-input');
let inputEmail = document.querySelector('.contact-section-container > form > input')
let sumbitButton = document.querySelector('.contact-section-container > form > button')
for(let button of buttons) {
    button.addEventListener('click', function(e) {
        EMAIL_INPUT.scrollIntoView({
            behavior: 'smooth'
        })
        inputEmail.style = 'border: 2px solid #BB17F4'
    })
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');

function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

let emailNotification = document.querySelector('.success-send');

sumbitButton.addEventListener('click', function(e) {
    if(isEmailValid(inputEmail.value)) {
        inputEmail.style = 'border: 2px solid green'
        emailNotification.classList.add('active');
    } else {
        inputEmail.style = 'border: 2px solid red'
    }
    setTimeout(() => {
        inputEmail.style = 'border: 0'
      }, "2000")
    setTimeout(() => {
        emailNotification.classList.remove('active')
    }, '5000');
})

let burgerMenu = document.querySelector('.mobile-burger'),
    headerMenu = document.querySelector('.header-menu'),
    close = document.querySelector('#close'),
    links = document.querySelectorAll('.header-menu--items > a'),
    loginButton = document.querySelector('.header-menu .login-button');

burgerMenu.addEventListener('click', () => {
    headerMenu.classList.add('active')
})

close.addEventListener('click', function() {
    headerMenu.classList.remove('active')
})

loginButton.addEventListener('click', function() {
    headerMenu.classList.remove('active')
})

for(link of links){
    link.addEventListener('click', function() {
        headerMenu.classList.remove('active')
    })
}
