const toTop= document.querySelector('.to-top')


// omadam ertefah on item ro az bala gereftam va goftam agar az in bishatr shod class ro bedeh
// dg add nadam behesh

window.addEventListener('scroll', function (){
       // agar safhe az 200px bishtar bashe miad class mideh be to-top
       if(window.pageYOffset > 200){
              toTop.classList.add('active')
       }
       // agar na miad hazfhe mikoneh class ro 
       else{
              toTop.classList.remove('active')
       }
})












