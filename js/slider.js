//slider
const carousel = document.querySelector(".carousel"),
firstImg = document.querySelectorAll(".img-slider")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, prevPageX, prevSctrollLeft;
let firstImgWidth = firstImg.clientWidth + 424
arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth :firstImgWidth
  });
})
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevSctrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX
  carousel.scrollLeft = prevSctrollLeft - positionDiff;
}
const dragStop = () => {
  isDragStart = false
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);