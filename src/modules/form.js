function form() {
    const form = document.querySelector(".form")
    const input = form.querySelector('input')
    const validationMessage = document.querySelector('.valid-message')
    let inputValue = ''
    const emailPattern = /^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,}$/;

    function showMessage() {
        validationMessage.classList.remove("invisible")
    }
    function hideMessage() {
        validationMessage.classList.add("invisible")
    }
    input.addEventListener("input", (e) => {
        inputValue = e.target.value
    })

    form.addEventListener("submit", (e) => {
        if (emailPattern.test(inputValue)) {
            e.preventDefault()
            hideMessage()
            alert(`User e-mail is: ${inputValue}`)
            input.value = ""
        } else {
            showMessage()
            e.preventDefault()

        }
    })
}
export default form