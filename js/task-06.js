const input = document.querySelector('#validation-input')

input.addEventListener('blur', () => {
    const content = input.getAttribute('data-length')
    const contentLength = parseInt(content)
    const random = input.value.length;
    input.classList.remove('valid', 'invalid')
    if (contentLength === random) {
      input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
})






