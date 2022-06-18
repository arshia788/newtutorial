const search = document.querySelector('.search')
const btn= document.querySelector('.btn')
const input= document.querySelector('.input')

btn.addEventListener('click', function(){
        // baray in be search dadi ta betoni har taghiti ke mikhy bedi ro
	// miad ro div asli ye class ezafeh mikoneh 
       search.classList.toggle('active')

       // alan ta input miad to miti to halat type
       input.focus()
})

