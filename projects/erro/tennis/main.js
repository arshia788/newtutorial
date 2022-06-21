
const navbar= document.querySelector('header .navbar')

const shop= document.querySelector('.shop')

const nav= document.querySelector('.nav')

const icon= document.querySelector('.shop i')

const ham= document.querySelector('.ham')

ham.onclick= () =>{
    navbar.classList.toggle('show')
    ham.classList.toggle('color')
}

shop.onclick=()=>{
    nav.classList.toggle('active')
    icon.classList.toggle('rotate')
}


















