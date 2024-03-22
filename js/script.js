
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option5 = document.querySelector('#option5');

document.addEventListener("DOMContentLoaded", function() {
  // Lắng nghe sự kiện click trên radio buttons
  var radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(function(radio) {
      radio.addEventListener('change', function() {
          // Kiểm tra xem radio nào được chọn
          if (option1.checked) {
              // Nếu radio màu đỏ được chọn, thay đổi màu ảnh thành đỏ
              document.getElementById('img-brg').style.filter = 'grayscale(0%)';
          } else if (option2.checked) {
              // Nếu radio màu xanh được chọn, thay đổi màu ảnh thành xanh
              document.getElementById('img-brg').style.filter = 'grayscale(100%)';
          } else if (option3.checked) {
            // Nếu radio màu xanh được chọn, thay đổi màu ảnh thành xanh
            document.getElementById('img-brg').style.filter = 'hue-rotate(95deg)';
          } else if (option4.checked) {
            // Nếu radio màu xanh được chọn, thay đổi màu ảnh thành xanh
            document.getElementById('img-brg').style.filter = 'hue-rotate(195deg)';
          } else if (option5.checked) {
            // Nếu radio màu xanh được chọn, thay đổi màu ảnh thành xanh
            document.getElementById('img-brg').style.filter = 'hue-rotate(300deg)';
        } 
      });
  });
});

//tăng giảm
document.addEventListener('DOMContentLoaded', function() {
  const decreaseButton = document.querySelector('.decrease');
  const increaseButton = document.querySelector('.increase');
  const valueInput = document.querySelector('.value');

  // Function to increment value
  increaseButton.addEventListener('click', function() {
      valueInput.value = parseInt(valueInput.value) + 1;
  });

  // Function to decrement value
  decreaseButton.addEventListener('click', function() {
      if (parseInt(valueInput.value) > 1) {
          valueInput.value = parseInt(valueInput.value) - 1;
      }
  });
});