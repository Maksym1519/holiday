const backBtn = document.querySelector('.detailes-back')
let arrived = document.getElementById('arrived')
let departure = document.getElementById('departure')
const arrivedInput = document.getElementById('arrived-input')
const departureInput = document.getElementById('departure-input')




backBtn && backBtn.addEventListener('click',(event) => {
    event.preventDefault()
    window.history.back()
})

arrivedInput && arrivedInput.addEventListener('change', () => {
    arrived.innerText = arrivedInput.value
})

departureInput && departureInput.addEventListener('change', () => {
    departure.innerHTML = departureInput.value
})

