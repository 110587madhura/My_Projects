document.addEventListener('DOMContentLoaded', () => {
    const count = document.getElementById('count')
    const incBtn = document.getElementById('incBtn')
    const decBtn = document.getElementById('decBtn')
    const incCountDisplay = document.getElementById('incCount')
    const decCountDisplay = document.getElementById('decCount')
let counter=0

incBtn.addEventListener('click', () => {
    counter++
    count.textContent = counter
    incCountDisplay.textContent = counter
})
decBtn.addEventListener('click', () => {
    if(counter>0){
        counter--
    count.textContent = counter
    decCountDisplay.textContent = counter
}
})

// console.log(counter)
})