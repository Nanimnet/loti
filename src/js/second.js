const header = document.querySelector('.header')
const headerHamburger = document.querySelector('.header__hamburger')

headerHamburger.addEventListener('click', () => {
    header.classList.toggle('header--open')
})

const introButton = document.querySelector('.intro-hero__cta-button')
const chanceSection = document.querySelector('#get-chance')

introButton.addEventListener('click', event => {
    event.preventDefault()
    history.pushState(null, document.title, '#get-chance')
    chanceSection.scrollIntoView({ behavior: 'smooth' })
})



const simplicityButton = document.querySelector('.simplicity__cta-button')
const chanceSectionSecond = document.querySelector('#get-chance')

simplicityButton.addEventListener('click', event => {
    event.preventDefault()
    history.pushState(null, document.title, '#get-chance')
    chanceSectionSecond.scrollIntoView({ behavior: 'smooth' })
})
