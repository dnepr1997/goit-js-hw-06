const input = document.querySelector('#name-input')
const text = document.querySelector('#name-output')

input.addEventListener('input', hendClick)

function hendClick(event) {
    const inputValue = event.currentTarget.value.trim()
    if (inputValue !== "") {
        text.textContent = inputValue
    } else {
        text.textContent = 'Anonymous'
    }
}