document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.spinner').style.display = 'none';
        document.querySelector('.shop-cart-container').style.display = 'block';
        document.querySelector('#goToTopBtn').style.display = 'block'
    }, 2000)
})