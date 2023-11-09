const text = document.querySelector('.color')
const btn = document.querySelector('.change-color')
const body = document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor()
  text.textContent = body.style.backgroundColor
})






