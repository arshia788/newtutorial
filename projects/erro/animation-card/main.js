const img= document.querySelector('img');
const icon= document.querySelector('.icon')


img.onclick=()=>{
    img.classList.toggle('active')
    
    // in ro baray in gofti ke ta miad be axe click mikoneh in ham 
    // icon hay ma ham class migiran va display none mishan
    icon.classList.toggle('active')
}








