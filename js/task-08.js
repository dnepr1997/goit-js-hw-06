const form = document.querySelector('.login-form')
let elements = {}

form.addEventListener('submit', hendForm)

function hendForm(event) {
    event.preventDefault()
    const {email, password} = event.target
    if (email.value === "" || password.value === "") {
        alert('Всі поля повинні бути заповнені')
    } else {
        elements.email = `${email.value}`
        elements.password = `${password.value}`
        form.reset()
        console.log(elements);
    }
}
