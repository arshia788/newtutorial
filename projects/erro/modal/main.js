const open = document.querySelector('#open');

const modalContainer= document.querySelector('.modal_container')

const close = document.querySelector('#close')


// toggle nmitoni bedi chon vaghti show beshe dg on dokme nist ke bezani ro button
open.addEventListener('click', function(){
    modalContainer.classList.add('show')
})

// remove kardi in class ro ta az safhe hazfe beshe 
close.addEventListener('click', function(){
    modalContainer.classList.remove('show')
})



