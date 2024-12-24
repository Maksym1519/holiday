const burger = document.querySelector(".burger");
const burgerTopLine = document.getElementById("top-line");
const midLine = document.getElementById("mid-line");
const bottomLine = document.getElementById("bottom-line");
const mobileMenu = document.querySelector('.mobile-menu')

let isOpen = false;

burger.addEventListener("click", () => {
  if (!isOpen) {
    // Открыть бургер
    burgerTopLine.style.transform = "translateY(10px) rotate(45deg)";
    midLine.style.opacity = "0";
    bottomLine.style.transform = "translateY(-10px) rotate(-45deg)";
    mobileMenu.style.right = '0px'
  } else {
    // Закрыть бургер
    burgerTopLine.style.transform = "translateY(0) rotate(0)";
    midLine.style.opacity = "1";
    bottomLine.style.transform = "translateY(0) rotate(0)";
    mobileMenu.style.right = '-100%'
  }
  isOpen = !isOpen;
});
