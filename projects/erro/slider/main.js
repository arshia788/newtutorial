const sideBar= document.querySelector('.sidebar')

const btn= document.querySelector('.btn')

btn.addEventListener('click', function(){
       sideBar.classList.toggle('active')
       sideBar.style.visibility= 'visible'
})







