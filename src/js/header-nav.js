/* eslint-disable no-unused-vars */
const location = window.location.pathname
const navLinks = document.querySelectorAll('.header__nav-item').forEach(link => {
    const href = link.getAttribute('href')
    if(href && href === location) {
        link.classList.add('active')
    }
})
