const toTop= document.querySelector('.to-top')




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












