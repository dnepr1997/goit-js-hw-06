const number = document.querySelector('#value')
const counter = document.querySelector('#counter')
const btnDec = document.querySelector('button[data-action="decrement"]')
const btnInc = document.querySelector('button[data-action="increment"]')

let counterValue = 0

btnInc.addEventListener('click', plus) 
btnDec.addEventListener('click', minus)

function plus (event) {
    counterValue += 1
    number.textContent = counterValue
}

function minus (event) {
    counterValue -= 1
    number.textContent = counterValue
}