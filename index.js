let down = document.querySelectorAll('.spn')
let closet = document.querySelectorAll('.spn2')



down.forEach((e) => {
    e.addEventListener("click", () => {
        e.parentElement.classList.toggle('none')
        e.parentElement.nextElementSibling.classList.toggle('none')
    })
})

closet.forEach((c)=>{
    c.addEventListener("click", () => {
        c.parentElement.classList.toggle('none')
        c.parentElement.previousElementSibling.classList.toggle('none')
    })
})