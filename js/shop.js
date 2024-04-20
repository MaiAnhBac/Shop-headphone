document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const boxLi = box.querySelector('.box-li');
        const chevronIcon = box.querySelector('.fa-chevron-right');
        const boxList = box.querySelectorAll('.box-list');
        
        boxLi.addEventListener('click', function () {
            chevronIcon.classList.toggle('rotate-icon');
            boxList.forEach(element => {
                element.classList.toggle('block');
            });
        });
    });
});