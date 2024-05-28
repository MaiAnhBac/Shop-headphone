document.querySelectorAll('.colors_item').forEach(function(item) {
  item.addEventListener('click', function() {
      // First, set all items to text-transparent
      document.querySelectorAll('.colors_item').forEach(function(otherItem) {
          otherItem.classList.remove('text-white');
          otherItem.classList.add('text-transparent');
      });
      
      // Then, set the clicked item to text-white
      item.classList.remove('text-transparent');
      item.classList.add('text-white');
  });
});
document.querySelectorAll('.size').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.size').forEach((size) => {
      size.classList.remove('tick')
    })
    item.classList.add('tick')
  })
})

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