/* eslint-disable no-unused-vars */
const location = window.location.pathname;
const bookingDetailes = document.querySelectorAll(
  ".booking-location__item-btn"
);
const navBooking = document.getElementById("nav-booking");


document.querySelectorAll(".header__nav-item").forEach((link, index) => {
  const href = link.getAttribute("href");
  const normalizedHref = href ? href.replace(/^\./, "") : null;

  if (normalizedHref && location && normalizedHref === location) {
    link.classList.add("active");
   }
   if (location.includes('detail')) {
    navBooking && navBooking.classList.add('active')
   }
});

