// on rangi ro gerefti 
const progrees = document.querySelector('.progress-bar')
console.log(progrees)

window.addEventListener('scroll', ()=>{

       // window.pageYOffset zamani ke scroll mikoni fasle az bala safhe ro neshon mideh che ghadar fasle gerefti

       const winScroll= window.pageYOffset;

       // omadi ertefa kol safhe ro gerefti 
       // document.documentElement.scrollHeigh in ertefah kol safhe hast   
       // window.innerHeight miad ertefah panjereh karbar ro ke dareh mibineh hesab mikoneh na kole safhe 

       const height= document.documentElement.scrollHeight - window.innerHeight

       console.log(height)

       // yani addi ke bedast avordi to scroll kardan ro ba kole safhe kam bokon
       // baray in * dadi ta dorost kar bokoneh chon vaghto ke taghsim mishe javab nahei khili kam hast 
       // pas zarb kardi ta add gondeii begiri 

       const scrolled= (winScroll/ height) * 100;

       // alan maban width progrees shodeh javab ma ta scrolled
       //  in % ro bayad bezari ta kar bokone va poor beshe 
       // in % hamoon width ma hast ke bar mabnay % miaim hesab mikonim 

       progrees.style.width= `${scrolled}%`


})





















