const liftUp = document.querySelector('.lift-up')

liftUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

