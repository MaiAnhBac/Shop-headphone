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


let listSwathColor = document.querySelectorAll('.swath-color')
listSwathColor.forEach(item => {
    item.addEventListener("click", (e) => {
        item.closest(".option-swath").querySelector(".swath-color.active").classList.remove("active")
        item.classList.add("active")
        let imageProduct = item.closest(".card-toggle").querySelector(".card-picture img")
        imageProduct.src = e.target.src
    })
})