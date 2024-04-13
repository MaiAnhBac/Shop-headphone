document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const left_bottom = document.getElementById('left-bottom')
    checkbox.addEventListener("click", () => {
        if(checkbox.checked) {
            left_bottom.style.display ="block";
        }
        else {
            left_bottom.style.display ="none";
        }
    })
})