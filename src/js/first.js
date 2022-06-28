const leaveRequestButtonHeader = document.querySelector('.header__cta')
const leaveRequestElement = document.querySelector('.leave-request')
const leaveRequestClose = document.querySelector('.leave-request__close')
const leaveRequestButtonBlock = document.querySelector('.open-popup') 
const header = document.querySelector('.header')
const headerHamburger = document.querySelector('.header__hamburger')

headerHamburger.addEventListener('click', () => {
    header.classList.toggle('header--open')
})

leaveRequestButtonHeader.addEventListener('click', () => {
    leaveRequestElement.classList.remove('leave-request--hidden')
})

leaveRequestClose.addEventListener('click', () => {
    leaveRequestElement.classList.add('leave-request--hidden')
})

leaveRequestButtonBlock.addEventListener('click', () => {
    leaveRequestElement.classList.remove('leave-request--hidden')
})






