function info() {
    const importantBlock = document.querySelector(".importantBlock")
    const additionalInfo = importantBlock.querySelector(".additionalInfo")
    const button = document.querySelector(".arrowBottom")

    importantBlock.addEventListener("click", (e) => {
        additionalInfo.classList.toggle('hidden')
        button.classList.toggle('rotate-180')
    })
}
export default info