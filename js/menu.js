let navbar = document.querySelector('.navbar');
let bars = document.getElementById('menu')
document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    bars.classList.remove('.fa-bars');
    bars.classList.toggle('fa-xmark');
}

let shop = document.getElementById('fa-plus-shop');
let inf = document.getElementById('fa-plus-inf');
let cus = document.getElementById('fa-plus-cus');
let shop_block = document.querySelectorAll('.shop ul li.plus-none');
let inf_block = document.querySelectorAll('.information ul li.plus-none');
let cus_block = document.querySelectorAll('.customer-service ul li.plus-none');
shop.onclick = () => {
    shop_block[0].classList.toggle('block');
    shop_block[1].classList.toggle('block');
    shop_block[2].classList.toggle('block');
    shop_block[3].classList.toggle('block');
    shop_block[4].classList.toggle('block');
    shop_block[5].classList.toggle('block');
    shop_block[6].classList.toggle('block');
}
inf.onclick = () => {
    inf_block[0].classList.toggle('block');
    inf_block[1].classList.toggle('block');
}
cus.onclick = () => {
    cus_block[0].classList.toggle('block');
    cus_block[1].classList.toggle('block');
    cus_block[2].classList.toggle('block');
    cus_block[3].classList.toggle('block');
    cus_block[4].classList.toggle('block');
    cus_block[5].classList.toggle('block');
    cus_block[6].classList.toggle('block');
}


