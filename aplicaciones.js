const toggle = document.querySelector('.toggle')
const link = document.querySelector('.link')

toggle.addEventListener('click',() => {
    toggle.classList.toggle('rotate')
    link.classList.toggle('activo')

})
