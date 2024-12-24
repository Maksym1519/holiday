import Swiper from "swiper";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".swiper-container", {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
