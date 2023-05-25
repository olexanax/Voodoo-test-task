function info() {
    const betaInfo = document.querySelector(".beta-info")
    const hiddenInfo = betaInfo.querySelector(".hidden-info")
    const button = document.querySelector(".arrowBottom")

    betaInfo.addEventListener("click", (e) => {
        hiddenInfo.classList.toggle('hidden')
        button.classList.toggle('rotate-180')
    })
}
export default info