

window.addEventListener('scroll', function(){
    const header= document.querySelector('header')
    // gofti zamani ke window.scrollY az 0 bozorg tar bashe bia toggle bokon va gar na hichi
    // shart gozashi yek joraii 
    header.classList.toggle('sticky', window.scrollY > 0)
})

















