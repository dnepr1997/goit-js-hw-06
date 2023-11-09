const input = document.querySelector('#name-input')
const text = document.querySelector('#name-output')

input.addEventListener('input', hendClick)

function hendClick(event) {
    text.textContent = event.currentTarget.value
    if (text.textContent === "") {
        text.textContent = 'Anonymous'
    }
}