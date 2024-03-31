const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const create = document.getElementById('create');
const sign = document.getElementById('signin');
const sign_in = document.querySelector('.sign-in')
const sign_up = document.querySelector('.sign-up')

create.addEventListener('click', () => {
    sign_in.classList.add("sign-in-active")
    sign_up.classList.add("sign-up-active")
})
sign.addEventListener('click', () => {
    sign_in.classList.remove("sign-in-active")
    sign_up.classList.remove("sign-up-active")
})
