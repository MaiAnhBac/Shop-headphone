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
    toggleIcon(shop);
    toggleBlocks(shop_block);
}

inf.onclick = () => {
    toggleIcon(inf);
    toggleBlocks(inf_block);
}

cus.onclick = () => {
    toggleIcon(cus);
    toggleBlocks(cus_block);
}

function toggleIcon(icon) {
    if (icon.classList.contains('fa-plus')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        console.log(icon.classList.contains('fa-plus'))
    } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}

function toggleBlocks(blocks) {
    blocks.forEach(block => {
        block.classList.toggle('block');
    });
}


