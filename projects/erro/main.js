
// in alan asli hast 
const container= document.querySelector('#container')

// window dadi chon mikhy koli anjam bsehe ro safhe 
// in e hamoon event ma hast 
// event hammon tekoon dadan mouse ma hast ke miad etellat ro migireh

window.onmousemove = function(e){

       // yani bia mehvar x ro dar nazar begir har mogeh mouse dar hal move hast 
       // add ro taghsim bar 5 kardi ta add kam tari ro begiri va bedi be x

       let x= e.clientX / 5;

       // in darbareh ba mehvar y hast ke miad hesab mikoneh yani top,down
       let y= e.clientY /5;
       
       // backgroundPosition dadi chon axe to background hast 
       //  gofti mabna background ma bar mabnay x ma bashe ke addesh ro gefeti 

       container.style.backgroundPositionX= x + "px"
       container.style.backgroundPositionY= y + "px"

}


