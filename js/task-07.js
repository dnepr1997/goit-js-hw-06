const line = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
line.addEventListener('input', () => {
   const number = line.value
    text.style.fontSize = `${number}px`
})