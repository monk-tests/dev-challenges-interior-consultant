const navBtn = document.querySelector('.nav')
const closeBtn = document.querySelector('.nav-close')
const nav = document.querySelector('.desktop-nav')
const navOuter = document.querySelector('.ham')
const navLinksContainer = document.querySelector('.desktop-nav ul')
const navLinks = [...document.querySelectorAll('.nav-links')]


navBtn.addEventListener('click',()=>{
    navBtn.classList.toggle('nav-open')
    nav.classList.toggle('active')
    navBtn.classList.toggle('nav-close')
    document.body.classList.toggle('active')
    // navOuter.classList.toggle('open')
})

navLinksContainer.addEventListener('click',(e)=>{
    const btn = e.target.closest('.nav-links')
    navLinks.forEach(i=>i.classList.remove('active'))
    btn.classList.add('active')
})
console.log(navLinksContainer)