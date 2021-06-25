let burger = document.querySelector('.hamburger')
let menu = document.querySelector('.header__list')
let menuItem = document.querySelectorAll('.header__link')

burger.addEventListener('click', () => {    
    menu.classList.toggle('active')
    burger.classList.toggle('open')
})

menuItem.forEach((elem)  => {
    elem.addEventListener('click', () => {
        menu.classList.toggle('active')
        burger.classList.toggle('open')
    })
})