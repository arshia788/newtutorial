let header= document.querySelector('.header')

// gofteh az balay safhe 50 ta fasle dareh
// in 50ta sar top 50 omadeh
let sticky= header.offsetTop;
console.log(sticky)


window.addEventListener('scroll', () =>{
    // gofti agar fasle scroll bishtar az sticky bashe
    if(window.pageYOffset > sticky){
        header.classList.add('sticky')
    }
    // zamani ke kam tar az 50px hast miad remove mikoneh 
    else{
        header.classList.remove('sticky')
    }
})





