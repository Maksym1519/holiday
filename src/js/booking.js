const arrow = document.getElementById("select-arrow");
let isRotate = false;

const stars = document.querySelectorAll('.booking-location__item-star');
const starsBlack = document.querySelectorAll('.booking-location__item-star-black');
let isFav = false;


arrow &&
  arrow.addEventListener("click", () => {
    arrow.style.transform = isRotate ? "rotate(0deg)" : "rotate(180deg)";
    isRotate = !isRotate;
  });

if (stars && starsBlack) {
   if (stars.length === starsBlack.length) {
    stars.forEach((star, index) => {
      const starBlack = starsBlack[index]; 
      star.addEventListener('click', () => {
        if (!isFav) {
          star.style.display = 'none';
          starBlack.style.display = 'block';
        } else {
          star.style.display = 'block';
          starBlack.style.display = 'none';
        }
        isFav = !isFav; 
      });
    });
  } 
}
